

import ToastMessage from "@/Components/toast";
import { LoginEmailVerify } from "../../store/slices/login";
// import { apiinstance } from "./interceptor";
import {clientapiinstance} from './clientinterceptor'
import { CompanyDetailUpdateQuery, LoginOTPVerifyQuery, LoginQuery, MemberProfileDetailQuery, MyRofileUpdateQuery, ProfileNameCheckQuery, claimNowQuery } from "./query";
import { GetProfile, GetToken, SetMemberProfile, SetProfile, SetToken } from "./serverActions/cookies";
import { ChannelClaimStatus, ChannelProfileID, EntryClaimed } from "../../store/slices/channel";
import { baseUrl } from "./url";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

export const clientfetchGraphQl = async (GET_POSTS_QUERY, variable) => {

  try {
    const entries = await clientapiinstance("", {
      method: 'POST',
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: variable
      })
    });

    return entries
  } catch (error) {
    return error.message

  }
};

export async function LoginOtpApi(login, setEmailModal, setOtpModal, dispatch, setLogin,handleLoginModalClose,setErrorMes) {

  let variable = { "email": login.email }
  let result = await clientfetchGraphQl(LoginQuery, variable)
  if (result?.data) {
    if (result?.data?.memberLogin) {
      login.back = false
      login.emailLoader = false
      login.message = ''

      setEmailModal(false)
      setOtpModal(true)
      dispatch(LoginEmailVerify(login.email))
    }
  } else {
    if (result?.errors?.[0]?.message == "your email is not yet registered in our owndesk platform") {
      setLogin((exitvalue) => {
        return {
          ...exitvalue,
          // message: `Your Email is not registered with us and to claim your Startup, please register your Work Email Id with us.  Or you may write to mailto: hello@owndesk.in for assistance.`,
          message: (<span>Currently, we do not have any details about your company. Kindly contact mailto:<Link className="cursor-pointer hover:underline" onClick={()=>handleLoginModalClose()} href={`mailto:${"hello@owndesk.in"}?subject=Hello OwnDesk, I have something to say`}>hello@owndesk.in</Link> and seek assistance.</span>),
          emailLoader: false
          
        }
      })
      setErrorMes(true)
    } else if(result?.errors[0]?.message == "inactive member"){
      setLogin((exitvalue) => {
        return {
          ...exitvalue,
          // message: `Your Email is not registered with us and to claim your Startup, please register your Work Email Id with us.  Or you may write to mailto: hello@owndesk.in for assistance.`,
          // message: `Currently, we do not have any details about your company. Kindly contact mailto: hello@owndesk.in and seek assistance.`,
          message: (<span>Currently, we do not have any details about your company. Kindly contact mailto:<Link className="cursor-pointer hover:underline" onClick={()=>handleLoginModalClose()} href={`mailto:${"hello@owndesk.in"}?subject=Hello OwnDesk, I have something to say`}>hello@owndesk.in</Link> and seek assistance.</span>),
          emailLoader: false
        }
      })
      setErrorMes(true)
    }else{
      ToastMessage({ type: "success", message: result?.errors[0]?.message })
    }
    setLogin((exitvalue) => {
      return {
        ...exitvalue,
        emailLoader: false
      }
    })

  }

}

export async function LoginOtpVerifyApi(login, setToken, setOtpModal, LoginClearData,setLogin,setLoginOTPSubmit,setOtpErrorMes) {

  let variable = { "otp": login.otp, "email": login.email }
  let result = await clientfetchGraphQl(LoginOTPVerifyQuery, variable)
  if (result?.data) {
    if (result?.data?.verifyMemberOtp) {

      setLogin((data) => {
        return {
          ...data,
          otpLoader : false
        }
      })
      ToastMessage({ type: "success", message: "Logged in successfully..!" })
      setToken(result.data.verifyMemberOtp.token)
      SetToken(result.data.verifyMemberOtp.token)
      SetProfile(result.data.verifyMemberOtp?.memberProfileData)
      setOtpModal(false)
      LoginClearData();
      // redirect('/')



    }
  } else {
    if (result.errors) {
      setLogin((data) => {
        return {
          ...data,
          otpLoader : false,
          message:result?.errors[0]?.message 
        }
      })
      setOtpErrorMes(true)
      // ToastMessage({ type: "error", message: result?.errors[0]?.message })
      setLoginOTPSubmit(true)
    }

  }

}

export async function ProfileNameApi(variable, setProfileNameTrue) {

  let result = await clientfetchGraphQl(ProfileNameCheckQuery, variable)

  if (result?.data) {
    setProfileNameTrue(result.data.profileNameVerification)
  } else {
    if (result.errors) {
      // if (result?.errors[0]?.message == "profile slug already exists") {
      setProfileNameTrue(false)
      ToastMessage({ type: "error", message: result?.errors[0]?.message })
      // }
    }
  }
}

export async function ClaimNowApi(variable, handleCloseCliamModal, setClaimNowModalLoader,setCheckSubmit,setClaimEmailError) {

  let result = await clientfetchGraphQl(claimNowQuery, variable)
  if (result?.data) {
    if (result?.data?.memberclaimnow == true) {
      // ToastMessage({ type: "success", message: "Request Sent ..!" })
      setCheckSubmit(true)
      setClaimNowModalLoader(false)
      handleCloseCliamModal()
    } else {
      setClaimNowModalLoader(false)
    }
  } else {
    if (result.errors) {
      if(result?.errors[0]?.message=="current login email sholuld not be used in another claim"){
        setClaimNowModalLoader(false)
        setClaimEmailError("The work email ID already owns a page. Please use a different work email ID")
        // ToastMessage({ type: "error", message: result?.errors[0]?.message })
      }
      setClaimNowModalLoader(false)
    }
    if (result.status !== 200) {
      setClaimNowModalLoader(false)
    }
  }

}

export async function ChannelEntryEditApi(variable, setSaveSubmit,setcompanyProfile) {

  let result = await clientfetchGraphQl(CompanyDetailUpdateQuery, variable)
  if (result?.data) {
    if (result?.data?.memberProfileUpdate == true) {
      ToastMessage({ type: "success", message: "Saved..!" })
      // router.push('/')
      setSaveSubmit(false)

    }
  } else {
    if (result.errors) {
      
      if("profile slug already exists"==result?.errors?.[0]?.message){
        setcompanyProfile(prevState => ({
          ...prevState,
          ["profileSlugError"]: result?.errors?.[0]?.message
      }))
        setSaveSubmit(false)
      }
      else{
       ToastMessage({ type: "error", message: result?.errors[0]?.message})
      }
      
    }
  }

}


export async function MemberDetailsApi(variable, setProfileData, setLoader, dispatch) {

  let result = await clientfetchGraphQl(MemberProfileDetailQuery, variable)
  let profile = await result?.data?.getMemberProfileDetails
  if (profile) {
    if (profile?.memberDetails?.profileData?.length > 0) {

      profile.memberDetails?.profileData?.map((val, index) => {
        if (val.gallery?.length !== 5) {
          let lenth = 5 - val.gallery?.length
          for (let j = 0; j < lenth; j++) {
            val.gallery?.push('add')
          }
        }
      })

    }
    const MemberProfile = await GetProfile()
    if (MemberProfile) {
      if (profile.memberId == MemberProfile.memberId) {
        dispatch(EntryClaimed(true))
      } else {
        dispatch(EntryClaimed(false))
      }
    } else {
      dispatch(EntryClaimed(false))
    }
    dispatch(ChannelProfileID(profile.id))
    dispatch(ChannelClaimStatus(profile.claimStatus))
    setLoader(true)
    setProfileData(profile)

  }

}



export async function myProfileQuery(variable,setLoader,imageTrriger,setImageTrriger,setMyProfile) {

  let result = await clientfetchGraphQl(MyRofileUpdateQuery, variable)
  if (result?.data) {
    ToastMessage({ type: "success", message: "Saved..!" })
    setLoader(false)
    setImageTrriger(imageTrriger+1)
  } 
  else{
    if(result?.errors){

   
      if(result?.errors?.[0]?.message=="email already exists"){
        setMyProfile(prevState => ({
          ...prevState,
          ["emailError"]: result?.errors?.[0]?.message
      }))
      }
      if(result?.errors?.[0]?.message=="mobile number already exists"){
        setMyProfile(prevState => ({
          ...prevState,
          ["numberError"]: result?.errors
      }))
      }
      
        setImageTrriger(imageTrriger+1)
      }
    }
  }
  


export async function myProfileDetail(handleUploaded,vaia,MyRofileDetailQuery) {

  let result = await clientfetchGraphQl(MyRofileDetailQuery,vaia)
  if (result?.data) {
    handleUploaded(result?.data)
    
  } 
  if(result?.errors){
    ToastMessage({ type: "error", message: result?.errors[0]?.message })
  }

}

export async function fetchGraphQlForm(formData) {
  let token = await GetToken()
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': token}
    });
    ToastMessage({ type: "success", message: "Saved..!" })
  } catch (error) {
    return error.message

  }
}

export const fetchGraphQlClient = async (GET_POSTS_QUERY, variable,channelEntries,setSkeletonLoading,setScrollLoader,setChannelEntries) => {

  try {
    const channel = await clientapiinstance("", {
      method: 'POST',
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: variable
      })
    });

    let channelEntriesList =channel?.data?.channelEntriesList?.channelEntriesList
    setSkeletonLoading(false)
    if(channelEntriesList?.length==0){
        setScrollLoader(true)
    }

    let postesArr=channelEntries.concat(channelEntriesList)
    setChannelEntries(postesArr)
  } catch (error) {
    return error.message

  }
};
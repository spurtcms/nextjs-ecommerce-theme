
import ToastMessage from "@/Components/ToastMessage/ToastMessage";
import { BearerToken } from "./clientGraphicql";
import { apiinstance } from "./interceptor";
import { Redirect } from "./serverActions";
import { getAddress, reloadCartCount } from "@/redux/slices/cartSlice";

export const fetchGraphQl = async (GET_POSTS_QUERY,varia) => {
 
  // try {
    const entries = await apiinstance("",{
      method: 'POST',
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: varia
      })
    });
    if(entries?.data){
      
      return entries?.data
    }else{
    if(entries?.status){
      console.log(entries?.status,'wdsadasd')
      return entries
    }
      
    }
    // else{
    //  
    //   return entries
    // } 
     
  // } catch (error) {
  //   console.log(error,'ygygytftrftrt')
  //   throw error;
  // }
};

export const postGraphQl = async (GET_POSTS_QUERY,varia,check,setLoader,cartName,reloadCount,dispatch) => {

  try {
    const entries = await fetchGraphQl(GET_POSTS_QUERY,varia);
    console.log(entries?.status,'0998978877887')
    if(check==="signup"){
      if(entries?.memberRegister==true){
        setLoader(false)
        Redirect("/auth/login")
        
      }else{
        setLoader(false)
      }

    }
    if(check==="login"){
      console.log(cartName,'cartName32423424')
      
      if(entries?.templateMemberLogin!=undefined&&entries?.templateMemberLogin!=""){
      BearerToken(entries?.templateMemberLogin) 
      setLoader(false)
      
      if(cartName!=""){
        Redirect("/account/checkout-shipping")
      }
      else{
        Redirect('/')
      }
      
      ToastMessage({type:'success',message:"Login Successfull"})
    dispatch(reloadCartCount(reloadCount+1))

      }
      else{
        if(entries?.status){
          setLoader(false)
          Redirect("/auth/login")
          ToastMessage({type:'error',message:"Invalid email and password"})
        }
      }
      
      

    }
    if(check==="checkout"){
      console.log(entries?.ecommerceOrderPlacement,'entries?.ecommerceOrderPlacement');
      if(entries?.ecommerceOrderPlacement){
        localStorage.removeItem("add-cart-list")
        Redirect("/account/my-orders")
        setLoader(false)
        dispatch(getAddress({}))
        dispatch(reloadCartCount(reloadCount+1))
      }else{
        setLoader(false)
      }
    }
  } catch (error) {
    throw error;
  }
};


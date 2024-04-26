
import ToastMessage from "@/Components/ToastMessage/ToastMessage";
import { BearerToken } from "./clientGraphicql";
import { apiinstance } from "./interceptor";
import { Redirect } from "./serverActions";

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

export const postGraphQl = async (GET_POSTS_QUERY,varia,check,setLoader,cartName) => {

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

    }else if(check==="login"){
      console.log(cartName,'cartName32423424')
      
      if(entries?.templateMemberLogin!=undefined&&entries?.templateMemberLogin!=""){
      BearerToken(entries?.templateMemberLogin) 
      setLoader(false)
      if(cartName!=""){
        Redirect("/checkout-shipping")
      }
      else{
        Redirect('/')
      }
      
      ToastMessage({type:'success',message:"Login Successfull"})
      }
      else{
        if(entries?.status){
          setLoader(false)
          Redirect("/auth/login")
          ToastMessage({type:'error',message:"Invalid email and password"})
        }
      }
      
      

    }
  } catch (error) {
    throw error;
  }
};


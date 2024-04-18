

import { apiinstance } from "./interceptor";
import { Redirect } from "./serverActions";

export const fetchGraphQl = async (GET_POSTS_QUERY,varia) => {
 
  try {
    const entries = await apiinstance("",{
      method: 'POST',
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: varia
      })
    });
     return entries.data
  } catch (error) {
    throw error;
  }
};

export const postGraphQl = async (GET_POSTS_QUERY,varia,check,setLoader) => {

  try {
    const entries = await fetchGraphQl(GET_POSTS_QUERY,varia);
    console.log(entries,'entries');
    if(check==="signup"){
      if(entries?.memberRegister==true){
        setLoader(false)
        Redirect("/auth/login")
        
      }else{
        setLoader(false)
      }

    }
  } catch (error) {
    throw error;
  }
};

import { Token } from "./clientGraphicql";



export const apiinstance=async(url,options)=>{
    const headers = {
        'Content-Type': 'application/json',
        // "Authorization":process.env.NEXT_PUBLIC_SPURTCMS_TOKEN
      }
      const token = await Token();
    
      if (token==""||token==undefined) {
        headers['Authorization']=process.env.NEXT_PUBLIC_SPURTCMS_TOKEN
        
      }
      else{
        headers['Authorization'] = token
      }
    
      const config = {
        method: options.method || 'GET',
        headers,
        ...options,
      }
    
      if (config.method === 'GET') {
        delete config.body
      } else {
        config.body = config.body
      }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SPURTCMS_BASEURL}${url}`,config);
        if(res.ok){
            return await res.json();
        }else{
         
        }
     
}
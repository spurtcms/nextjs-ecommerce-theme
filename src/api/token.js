'use server'
import { cookies } from "next/headers";
export async function Token() {
    const cookiesdata = cookies()
    const token = cookiesdata.get("Token")
    if(token){
        console.log(token.value,"iui")
        return token?.value
    }
  
}
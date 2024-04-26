import LoginPage from "@/Components/Auth/Login";
import { cookies } from "next/headers";


export default function Login() {
  let tokenCheck=cookies().get("Token")
  return (
    <LoginPage tokenCheck={tokenCheck}/>
  )
}

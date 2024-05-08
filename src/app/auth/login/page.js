import LoginPage from "@/Components/Auth/Login";
import { cookies } from "next/headers";

export const metadata = {
  title: "Login"
};
export default function Login() {
  let tokenCheck=cookies().get("Token")
  return (
    <LoginPage tokenCheck={tokenCheck}/>
  )
}

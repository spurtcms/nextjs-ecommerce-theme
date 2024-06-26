"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GetToken() {
    const cookiesdata = cookies()
    const token = cookiesdata.get('Token')
    // if (token) {
        return token?.value
    // }
}

// export async function AdminGetToken() {
//     const cookiesAdmindata = cookies()
//     const Admintoken = cookiesAdmindata.get('AdminToken')
//     // if (token) {
//         return Admintoken?.value
//     // }
// }

export async function SetToken(value) {

    cookies().set('Token', value)
}

// export async function SetAdminToken(value){
//     cookies().set('AdminToken', value)
// }


export async function GetProfile() {
    const cookiesdata = cookies()
    const profile = cookiesdata.get('MemberProfile')
    if (profile) {
        return JSON.parse(profile.value)
    }
}

export async function SetProfile(profile) {
    cookies().set('MemberProfile', JSON.stringify(profile))
}

// export async function DeleteToken(){
//     cookies().delete('BearerToken')
// }

// export async function DeleteMemberProfile(){   
//      cookies().delete('MemberProfile')
// }

export async function DeleteCookie(name) {
    cookies().delete(name)

}

export async function GetSearch() {
    const cookiesdata = cookies()
    const search = cookiesdata.get('search')
    if (search) {
        return search.value
    }
}

export async function SetSearch(value) {

    cookies().set('search', value)
}

export async function Unauthorized() {
    DeleteCookie('Token')
    DeleteCookie('MemberProfile')
    DeleteCookie('AdminToken')
    redirect('/')

}
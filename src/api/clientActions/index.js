'use client'

   
export function AdminGetTokenSessions() {
    const Admintoken = sessionStorage.getItem('AdminToken')
    // if (token) {
        return Admintoken
    // }
}


export async function SetAdminTokenSession(value){
    sessionStorage.setItem('AdminToken', value)
}

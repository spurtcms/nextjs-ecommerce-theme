import ToastMessage from '@/Components/toast'
import { AdminGetToken, DeleteCookie, GetToken, Unauthorized } from './serverActions/cookies'
import { baseUrl } from './url'
import { AdminGetTokenSessions } from './clientActions'



export const apiinstance = async (url, options) => {

  let token = await GetToken()
  // let admintoken= await AdminGetToken()
  let admintoken= await AdminGetTokenSessions()

  const headers = {
    'Content-Type': 'application/json',
    "Authorization": process.env.NEXT_PUBLIC_OWNDESK_GUESTUSER_TOKEN
    // "Authorization": "%$HEID$#PDGH*&MGEAFCC"
  }
  if(admintoken){
    headers['Authorization'] = admintoken
  }
  else 
  if (token) {
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


  // const res = await fetch(`${"http://192.168.29.81:8081/query"}${url}`, config);
  //  const res = await fetch(`${baseUrl}${url}`,config,{next:{revalidate:5}});
  const res = await fetch(`${baseUrl}${url}`, config);
  // const res = await fetch(`${"http://localhost:8081/query"}${url}`, config);

  if (res.ok) {
    return await res.json();
  } else {

    switch (res.status) {

      case 400:

        handleBadRequest(res.statusText);
        break;

      case 401:
        handleUnauthorized(res.statusText);
        break;

      case 403:
        handleForBidden(res.statusText);
        break;

      case 404:
        handleNotFound(res.statusText);
        break;

      case 422:
        handleUnProcessableEntry(res.statusText);
        break;

      case 500:
        handleServerError(res.statusText);
        break;
      case 409:
        handleErrorMessages(res.statusText);
        break;

      default:
        break;
    }
    return res;
  }

  async function handleBadRequest(error) {
    ToastMessage({ type: "error", message: error });
  }

  async function handleUnauthorized(error) {
    ToastMessage({ type: "error", message: error });
    // localStorage.clear();
    // sessionStorage.clear();
    // Router.push('/auth/signin')
    // DeleteCookie('Token')
    // DeleteCookie('MemberProfile')
    // window.location.reload();
    Unauthorized()

  }
  async function handleForBidden(error) {
    ToastMessage({ type: "error", message: error })

    // DeleteCookie('Token')
    // DeleteCookie('MemberProfile')
    // window.location.reload();
    // localStorage.clear();
    // sessionStorage.clear();
    // Router.push('/auth/signin')
    Unauthorized()
  }

  async function handleNotFound(error) {
    ToastMessage({ type: "error", message: error });
  }

  async function handleUnProcessableEntry(error) {
    ToastMessage({ type: "error", message: error });
  }

  async function handleServerError(error) {
    ToastMessage({ type: "error", message: error });
  }
  async function handleErrorMessages(error) {
    ToastMessage({ type: "error", message: error });
  }

}
"use server"

import { apiinstance } from "./interceptor";



export async function fetchGraphQLDa (GET_POSTS_QUERY_LIST,varPos) {

    try {
      
      const entries = await apiinstance("",{
        method: 'POST',
        body: JSON.stringify({
          query: GET_POSTS_QUERY_LIST,
          variables: varPos
        })
      });
     
     return entries?.data
     
    } catch (error) {
      throw error;
    }
  }
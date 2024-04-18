

import React from 'react'
import HomePage from './HomePage'
import { fetchGraphQl } from '@/api/graphicql'
import { GET_POSTS_LIST_QUERY } from '@/api/query'

export default async function HomeServerActions() {
  let variable={
    "limit": 20,
    "offset": 0
  }
  let cardlist=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable)
  cardlist=cardlist?.ecommerceProductList
  console.log(cardlist,'cardlist323232');

  return (
    <>
    <HomePage cardlist={cardlist}/>
     
    </>
  )
}

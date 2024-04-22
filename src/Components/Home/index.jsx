

import React from 'react'
import HomePage from './HomePage'
import { fetchGraphQl } from '@/api/graphicql'
import { GET_POSTS_LIST_QUERY } from '@/api/query'

export default async function HomeServerActions() {

  return (
    <>
    <HomePage />
     
    </>
  )
}

import React, { Suspense } from 'react'
import HeaderServerActions from './HeaderServerActions'
import { cookies } from 'next/headers'

export default function Header() {
  let tokenCheck=cookies().get("Token")
  return (
    <Suspense fallback={null}>
    <HeaderServerActions tokenCheck={tokenCheck?.value}/>
    </Suspense>
  )
}

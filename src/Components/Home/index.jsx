

import React, { Suspense } from 'react'
import HomePage from './HomePage'

export default async function HomeServerActions() {

  return (
    <>
    <Suspense fallback={null} >
    <HomePage />
    </Suspense>
     
    </>
  )
}

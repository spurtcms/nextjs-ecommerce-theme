'use client'
import Image from 'next/image'
import React from 'react'

export default function ImageComponets({path,w,h,alt}) {
    const imageLoader = ({src}) => {
        return src
      }
  return (
   <>
                    <Image
                      loader={imageLoader}
                      src={path}
                        alt={alt}
                        width={w}
                        height={h}
                        priority
                      />
   </>
  )
}

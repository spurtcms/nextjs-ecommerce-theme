import React from 'react'

export default function NextImage(src, className, alt, width, height,style) {
    return (
        <>
            <img
                src={src}
                className={className}
                width={width}
                height={height}
                alt={alt}
                style={style}
            />
        </>
    )
}

import React from 'react'

const Imagecomponent = ({ src,
    alt,
    className = '' }) => {
    return (
        <div className="w-[1000px] p-1 md:p-2 mx-auto">
            <img
                src={src}
                alt={alt}
                className={`block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform ease-in-out duration-300  ${className}`}
            />
        </div>
    )
}

export default Imagecomponent

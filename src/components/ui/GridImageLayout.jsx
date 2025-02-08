import React from 'react'

const GridImageLayout = ({ images, className = '' }) => {
    return (
        <div className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 ${className}`}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className="masonry-item overflow-hidden rounded-lg"
                >
                    <img
                        src={image.src}
                        alt={image.alt || `Grid image ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
                    />
                </div>
            ))}
        </div>
    )
}

export default GridImageLayout
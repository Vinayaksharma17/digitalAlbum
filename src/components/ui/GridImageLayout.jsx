import React from "react"
import { Button } from "./button"
import { Download, Heart } from "lucide-react"

const GridImageLayout = ({ images, className = "" }) => {
    const downloadImage = async (imageUrl, imageName = "image") => {
        try {
            const response = await fetch(imageUrl)
            if (!response.ok) {
                throw new Error("Failed to fetch image")
            }
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = imageName
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error("Error downloading image", error)
            alert("Failed to download image. Please try again.")
        }
    }
    return (
        <div
            className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 ${className}`}
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className="masonry-item overflow-hidden rounded-lg relative group"
                >
                    <img
                        src={image.src}
                        alt={image.alt || `Grid image ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
                    />
                    <Button
                        variant="outline"
                        icon={<Heart />}
                        className="inline-flex items-center justify-center absolute top-5 right-5 bg-red-700 border-none opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 hover:bg-red-600"
                    >
                        Save
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                            downloadImage(
                                image.src,
                                image.alt || `image-${index + 1}`
                            )
                        }
                        className="inline-flex items-center justify-center rounded-full absolute bottom-5 right-5 opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 bg-red-700 border-none hover:bg-red-600"
                        icon={<Download />}
                    ></Button>
                </div>
            ))}
        </div>
    )
}

export default GridImageLayout

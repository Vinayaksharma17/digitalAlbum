import React from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
const Imagecomponent = ({ src, alt, className = "" }) => {
    return (
        <div className="relative w-[1000px] p-1 md:p-2 mx-auto group">
            <img
                src={src}
                alt={alt}
                // className={`block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform ease-in-out duration-300  ${className}`}
                className={`block h-full w-full rounded-lg object-cover object-center ${className}`}
            />
            <Button
                variant="outline"
                icon={<Heart />}
                className="inline-flex items-center justify-center absolute top-5 right-5 bg-red-700 border-none opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 hover:bg-red-600"
            >
                Save
            </Button>
        </div>
    )
}

export default Imagecomponent

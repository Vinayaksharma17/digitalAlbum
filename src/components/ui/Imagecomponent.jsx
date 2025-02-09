import React from "react"
import { Button } from "@/components/ui/button"
import { Download, Heart } from "lucide-react"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

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
            <Button
                size="icon"
                variant="outline"
                className="inline-flex items-center justify-center rounded-full absolute bottom-5 right-5 opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 bg-red-700 border-none hover:bg-red-600"
                icon={<Download />}
            ></Button>
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        className="inline-flex items-center justify-center rounded-full absolute bottom-12 right-5 bg-red-700 border-none hover:bg-red-600"
                        icon={<Ellipsis />}
                    ></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        side="bottom"
                        align="start"
                        sideOffset={5}
                    >
                        Download
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        className="inline-flex items-center justify-center rounded-full absolute bottom-12 right-5 bg-red-700 border-none hover:bg-red-600"
                    >
                        <Ellipsis />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" sideOffset={5}>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <div className="absolute bottom-12 right-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            variant="outline"
                            className="inline-flex items-center justify-center rounded-full bg-red-700 border-none hover:bg-red-600"
                        >
                            <Ellipsis />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-32"
                        side="top"
                        align="start"
                        alignOffset={-25}
                    >
                        <DropdownMenuItem>Download</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}
        </div>
    )
}

export default Imagecomponent

"use client"

import React, { useState } from 'react'
import Imagecomponent from "@/components/ui/Imagecomponent"
import RootLayout from "./rootLayout"
import { Button } from "@/components/ui/button"
import { Image, LayoutPanelLeft } from "lucide-react";
import images from "../lib/images.json"
import GridImageLayout from "@/components/ui/GridImageLayout";

export default function Layout({ children }) {
    const [imageLayout, setImageLayout] = useState("simple")
    const simpleImageLayout = () => {
        setImageLayout("simple")
    }
    const gridImageLayout = () => {
        setImageLayout("grid")
    }


    return (
        <RootLayout>
            {/* <TypographyH2 /> */}
            <h1>Hi</h1>
            <div className="flex items-center justify-center gap-3">
                <Button variant={imageLayout === 'simple' ? 'outline' : 'ghost'} icon={<Image />} onClick={simpleImageLayout} >Simple</Button>
                <Button variant={imageLayout === 'grid' ? 'outline' : 'ghost'} icon={<LayoutPanelLeft />} onClick={gridImageLayout}>Grid</Button>
            </div>
            {imageLayout === "simple" ?
                <div className='flex flex-wrap items-center gap-3'>
                    {images.map((image, index) => <Imagecomponent key={index + 1} src={image.src} alt={image.alt} className="" />)}


                </div> : <GridImageLayout images={images} />}

        </RootLayout>
    )
}

import Imagecomponent from "@/components/ui/Imagecomponent"
import RootLayout from "./rootLayout"
import { Button } from "@/components/ui/button"
import { LayoutPanelLeft, Trash } from "lucide-react";

export default function Layout({ children }) {
    return (
        <RootLayout>
            {/* <TypographyH2 /> */}
            <h1>Hi</h1>
            <div className="flex items-center justify-center gap-3">
                <Button variant="outline">Simple</Button>
                <Button variant="outline" icon={<LayoutPanelLeft />} >Grid</Button>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
                <Imagecomponent src={"https://img.freepik.com/free-vector/26th-january-indian-national-day_23-2148386170.jpg?t=st=1737881174~exp=1737884774~hmac=41c8e6460219104d9aa6644fd2643d0fe290e83bd2473b04ef83ec99ef20b82e&w=900"} alt={"dummy image"} className="" />
                <Imagecomponent src={"https://img.freepik.com/free-vector/26th-january-indian-national-day_23-2148386170.jpg?t=st=1737881174~exp=1737884774~hmac=41c8e6460219104d9aa6644fd2643d0fe290e83bd2473b04ef83ec99ef20b82e&w=900"} alt={"dummy image"} className="" />
            </div>
        </RootLayout>
    )
}

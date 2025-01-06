import TypographyH2 from "@/components/ui/typography"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: "100",
    subsets: ["latin"],
})

export default function Page() {
    return <main className={roboto.className}>{/* <TypographyH2 /> */}</main>
}

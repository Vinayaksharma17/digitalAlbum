import Navbar from "./components/Ui/navbar"
import TypographyH2 from "./components/Ui/typography"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: "100",
    subsets: ["latin"],
})
export default function Page() {
    return (
        <html lang="en">
            <head></head>
            <main className={roboto.className}>
                <Navbar />
                <TypographyH2 />
            </main>
        </html>
    )
}

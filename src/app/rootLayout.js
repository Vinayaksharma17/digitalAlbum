"use client"

import Navbar from "@/components/ui/navbar"
import { ThemeProvider } from "@/components/ui/themeProvider"
import "./globals.css"
// import "material-symbols"
// import { PublicEnvScript } from "next-runtime-env"

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>{/* <PublicEnvScript /> */}</head>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <aside>
                        <Navbar />
                    </aside>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    )
}

import { ThemeProvider } from "../components/ui/themeProvider"
// import { NavigationBar } from "@/components/navigation-bar"
import Navbar from "../components/ui/navbar"

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

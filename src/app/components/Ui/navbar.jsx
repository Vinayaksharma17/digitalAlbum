import React from 'react'
import { ThemeProvider } from './themeProvider'
import ThemeToggle from './themeToggle'

const Navbar = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">Digital Albumm</div>
          <ThemeToggle />
        </div>
      </nav>
    </ThemeProvider>
  )
}

export default Navbar
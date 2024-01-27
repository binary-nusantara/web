// components/Navbar.js
"use client"
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="bg-white fixed top-0 left-0 w-full shadow-md z-10">
            <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Binary Nusantara</div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#about" className="font-semibold">About</a>
                        </li>
                        <li>
                            <a href="#stars" className="font-semibold">Boxing Stars</a>
                        </li>
                        <li>
                            <a href="#stakeholders" className="font-semibold">Stakeholders</a>
                        </li>
                        <li>
                            <a href="#sub" className="font-semibold">Subscribe</a>
                        </li>
                    </ul>
                </nav>
                <button className="bg-transparent border-none p-2 rounded text-sm font-semibold" onClick={toggleDarkMode}>
                    {darkMode ? 'Light' : 'Dark'} Mode
                </button>
                <button className="md:hidden" onClick={toggleNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </header>
            <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white w-full top-16 left-0 fixed z-20`}>
                <ul className="flex flex-col p-4 space-y-2">
                    <li>
                        <a href="#about" className="font-semibold">About</a>
                    </li>
                    <li>
                        <a href="#stars" className="font-semibold">Boxing Stars</a>
                    </li>
                    <li>
                        <a href="#stakeholders" className="font-semibold">Stakeholders</a>
                    </li>
                    <li>
                        <a href="#sub" className="font-semibold">Subscribe</a>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center justify-between p-4">
                <button className="bg-transparent border-none p-2 rounded text-sm font-semibold" onClick={toggleDarkMode}>
                    {darkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <header className="text-white body-font bg-gray-900">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                    <span className="ml-3 text-xl font-bold">City Tour</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href='/' className="mr-5 hover:text-gray-200 cursor-pointer text-xl font-bold">Home</a>
                    <a href='/' className="mr-5 hover:text-gray-200 cursor-pointer text-xl font-bold">About</a>
                    <a href='/' className="mr-5 hover:text-gray-200 cursor-pointer text-xl font-bold">Cities</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
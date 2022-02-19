import React from 'react'
import logo from './3D-world.png';

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} atl="Logo"/>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href='#'>Series Y Peliculas</a>
            <a className="mr-5 hover:text-gray-900" href='#'>Videojuegos</a>
            <a className="mr-5 hover:text-gray-900" href='#'>Manga y Anime</a>
            <a className="mr-5 hover:text-gray-900" href='#'>Varios</a>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Carrito
            </button>
        </div>
    </header>
  )
}

export default NavBar
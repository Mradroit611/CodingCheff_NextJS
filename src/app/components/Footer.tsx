import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link className="flex title-font font-bold items-center md:justify-start justify-center text-gray-900" href={"/"}>
              <img src="/logo.png" alt="" />
            </Link>
            <p className="mt-2 text-sm text-gray-500">The Codingcheff website offers a complete free website templates – enabling anyone to create and grow online.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">SERVICES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-indigo-600 hover:underline" href='/WebsiteTemplate'>Website Templates</Link>
                </li>
                <li>
                  <Link href="AdvanceWebsite" className="text-gray-600 hover:text-indigo-600 hover:underline">Advance Websites</Link>
                </li>
                
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 font- tracking-widest text-sm mb-3">SOLUTIONS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/WebsiteTemplate" className="text-gray-600 hover:text-indigo-600 hover:underline">Online Booking</Link>
                </li>
                <li>
                  <Link href="/Ecommerce" className="text-gray-600 hover:text-indigo-600 hover:underline">E-Commerce Website</Link>
                </li>
                <li>
                  <Link href="/WebsiteTemplate" className="text-gray-600 hover:text-indigo-600 hover:underline">Portfolio Website</Link>
                </li>
                
                <li>
                  <Link href="/Restaurants" className="text-gray-600 hover:text-indigo-600 hover:underline">Restaurant Website</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">COMPONENTS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/Resources" className="text-gray-600 hover:text-indigo-600 hover:underline">Navbar</Link>
                </li>
                <li>
                  <Link href="/Resources" className="text-gray-600 hover:text-indigo-600 hover:underline">Footer</Link>
                </li>
                <li>
                  <Link href="/Resources" className="text-gray-600 hover:text-indigo-600 hover:underline">Carousel</Link>
                </li>
                <li>
                  <Link href="/Resources" className="text-gray-600 hover:text-indigo-600 hover:underline">Hero Section</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">USEFUL LINKS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-indigo-600 hover:underline">Home</Link>
                </li>
                
                <li>
                  <Link href="/sign-in" className="text-gray-600 hover:text-indigo-600 hover:underline">Login</Link>
                </li>
                <li>
                  <Link href="/sign-up" className="text-gray-600 hover:text-indigo-600 hover:underline">SignUp</Link>
                </li>

              </nav>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  )
}

export default Footer

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiLogIn } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { UserButton, useUser } from '@clerk/nextjs';
import { MdAccountCircle } from "react-icons/md";


const Navbar = () => {
  const { user, isLoaded } = useUser();
  const [showCodesDropdown, setShowCodesDropdown] = useState(false);
  const [showToolsDropdown, setshowToolsDropdown] = useState(false);
  const [showResourcesDropdown, setshowResourcesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const codesDropdownRef = useRef<HTMLLIElement>(null);
  const toolsDropdownRef = useRef<HTMLLIElement>(null);

  const closeAllDropdowns = () => {
    setShowCodesDropdown(false);
    setshowToolsDropdown(false);
    setshowResourcesDropdown(false);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        codesDropdownRef.current &&
        !(codesDropdownRef.current as HTMLElement).contains(event.target as Node) &&
        toolsDropdownRef.current &&
        !(toolsDropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        closeAllDropdowns();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`text-gray-600 flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-lg sticky top-0 bg-white z-10 transition duration-300 ease-in-out ${isScrolled ? 'scroll' : ''
        }`}
    >
      <div className="logo sm:mx-5 mr-40">
        <Link href="/">
          <Image width={170} height={40} src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 sm:space-x-5 justify-center md:text-base text-sm md:border-gray-400">
          <Link className="font-medium sm:text-lg hover:text-indigo-500" href="/">
            <li>Home</li>
          </Link>
          <li className="relative" ref={codesDropdownRef}>
            <button onClick={() => {closeAllDropdowns(); setShowCodesDropdown(!showCodesDropdown);}} className="flex items-center focus:outline-none hover:text-indigo-500">
            
              <span className="font-medium sm:text-lg">Creation</span>
              <IoIosArrowDown className="ml-1" />
            </button>
            {showCodesDropdown && (
              <ul className="absolute top-full left-0 bg-white shadow-md w-60 rounded-md mt-1 border">
                <Link href="/WebsiteTemplate">
                  <li className="px-6 py-4 hover:bg-gray-100">Website Templates</li>
                </Link>
                <Link href="/AdvanceWebsite">
                  <li className="px-6 py-4 hover:bg-gray-100">Advance Websites</li>
                </Link>
                
              </ul>
            )}
          </li>
          <li className="relative" ref={toolsDropdownRef}>
            <button
              onClick={() => {closeAllDropdowns(); setshowToolsDropdown(!showToolsDropdown);}}
              className="flex items-center focus:outline-none hover:text-indigo-500"
            >
              <span className="font-medium sm:text-lg">Business</span>
              <IoIosArrowDown className="ml-1" />
            </button>
            {showToolsDropdown && (
              <ul className="absolute top-full left-0 bg-white shadow-md sm:w-60 w-48 rounded-md mt-1 border">
              <Link href="/Ecommerce">
                <li className="sm:px-6 px-4 sm:py-4 py-2 hover:bg-gray-100">eCommerce Website</li>
              </Link>
              <Link href="/Restaurants">
                <li className="sm:px-6 px-4 sm:py-4 py-2 hover:bg-gray-100">Restaurants</li>
              </Link>
              <Link href="/BlogWebsite">
                <li className="sm:px-6 px-4 sm:py-4 py-2 hover:bg-gray-100">Blog Website</li>
              </Link>
              <Link href="/Fitness">
                <li className="sm:px-6 px-4 sm:py-4 py-2 hover:bg-gray-100">Fitness</li>
              </Link>
            </ul>
            )}
          </li>
          <Link className="font-medium sm:text-lg hover:text-indigo-500" href="/Resources">
            <li>Resources</li>
          </Link>
          
        </ul>
      </div>
      <div className="absolute right-0 top-6 mx-5 cursor-pointer items-center flex flex-row space-x-2">
        {isLoaded && !user && (
          <>
            <Link href="/sign-up">
              <button className="text-white hover:text-gray-100 bg-gradient-to-r from-indigo-500 to-blue-600 py-2 px-4 font-medium sm:text-lg rounded-full shadow-md focus:outline-none ">
                <span className=" md:inline-block ">Get Started</span>
                <BiLogIn className="hidden md:hidden" />
              </button>
            </Link>
            <Link href={'/sign-in'}><MdAccountCircle className='  text-xl md:text-4xl' /></Link>
          </>
        )}
        {isLoaded && user && (
          <>
            <Link href="/user-profile">
              <button className="text-white hover:text-gray-100 bg-gradient-to-r from-indigo-500 to-blue-600 py-2 px-4 font-medium rounded-full shadow-md focus:outline-none">
                <span className=" md:inline-block">Dashboard</span>
              </button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
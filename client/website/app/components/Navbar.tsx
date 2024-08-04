import Link from 'next/link';
import React from 'react';
import { FiHome } from "react-icons/fi";
import { CgArrowRightO } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between h-24">
        <img className="w-30 h-30" alt="logo" src="logo.svg" />
        
    <div className="flex items-center space-x-6 lg:space-x-10">
        <Link href="/dashboard">
        <p className="text-xl font-bold font-spaceGrotesk text-[#33363F] hover:text-[#fe5f55] flex items-center cursor-pointer">
            <FiHome className="mr-2" />
            Dashboard
        </p>
        </Link>
        <Link href="/applications">
        <p className="text-xl font-bold font-spaceGrotesk text-[#33363F] hover:text-[#fe5f55] flex items-center cursor-pointer">
            <CgArrowRightO className="mr-2" />
            Applications
        </p>
        </Link>
        <Link href="/documents">
        <p className="text-xl font-bold font-spaceGrotesk text-[#33363F] hover:text-[#fe5f55] flex items-center cursor-pointer">
            <TiDocumentText className="mr-2" />
            Documents
        </p>
        </Link>
        <Link href="/profile">
        <p className="text-xl font-bold font-spaceGrotesk text-[#33363F] hover:text-[#fe5f55] flex items-center cursor-pointer">
            <IoPersonOutline className="mr-2" />
            Profile
        </p>
        </Link>
        <Link href="/matches">
        <p className="text-xl font-bold font-spaceGrotesk text-[#33363F] hover:text-[#fe5f55] flex items-center cursor-pointer">
            <CiHeart className="mr-2" />
            Matches
        </p>
        </Link>
    </div>

    <div className="flex items-center space-x-5">
        <FaRegCircleQuestion className="w-6 h-6 text-black" />
        <FaRegBell className="w-6 h-6 text-black" />
        <div className="h-10 border-l border-gray-300"></div>
        <img className="w-14 h-14 object-cover" src="yellow-dog.svg"/>
        <IoIosArrowDropdown className='w-6 h-6 text-black'/>
    </div>
    </div>
  );
};

export default Navbar;

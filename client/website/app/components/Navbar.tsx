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
    <>
        <div className="flex flex-row justify-between px-20 space-x-10 p-2 border-[#f0f0f0] border-y-2">
            <img alt="main logo" src="main-dog.svg" />
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/dashboard" className="flex items-center space-x-2">
                    <FiHome className="flex items-center space-x-2" />
                    <h1>Dashboard</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/applications" className="flex items-center space-x-2">
                    <CgArrowRightO className="flex items-center space-x-2" />
                    <h1>Applications</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/documents" className="flex items-center space-x-2">
                    <TiDocumentText className="flex items-center space-x-2" />
                    <h1>Documents</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/profile" className="flex items-center space-x-2">
                    <IoPersonOutline className="flex items-center space-x-2" />
                    <h1>Profile</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/matches" className="flex items-center space-x-2">
                    <CiHeart className="flex items-center space-x-2" />
                    <h1>Matches</h1>
                </Link>
            </div>

            <div className='text-black text-[20px] space-x-4 font-spaceGrotesk font-bold flex items-center'>
                <FaRegCircleQuestion className="w-6 h-6 text-black" />
                <FaRegBell className="w-6 h-6 text-black" />
                <div className="h-12 border-2 rounded-full border-[#f0f0f0]"></div>
                <Link href="/login" className="flex items-center space-x-2">
                    <img className="w-14 h-14 object-cover cursor-pointer" src="yellow-dog.svg" alt="Yellow Dog" />
                </Link>
                <IoIosArrowDropdown className='w-6 h-6 text-black'/>
            </div>
        </div>  
    </>
  );
};

export default Navbar;

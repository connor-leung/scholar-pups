import Image from "next/image";
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import IntroBox from "../components/intro-box";
import TopMatches from "../components/top-matches";
import Saved from "../components/saved";
import Recent from "../components/recent";


export default function Dashboard() {
return (
  <main className="bg-white min-h-screen">
    <Navbar />
    <IntroBox />

    <div className="flex flex-row space-x-5 items-start px-20 pt-12">
      <div className="bg-white rounded-full border-2 border-[#f0f0f0] px-8 py-2 inline-block hover:bg-[#73AAE8] group">
        <h1 className="text-black font-spaceGrotesk group-hover:text-[#1E5A9E]">View Matches</h1>
      </div>
      <div className="bg-white rounded-full border-2 border-[#f0f0f0] px-8 py-2 inline-block hover:bg-[#73AAE8] group">
        <h1 className="text-black font-spaceGrotesk group-hover:text-[#1E5A9E]">Change Preferences</h1>
      </div>
    </div>

    <TopMatches />
    <Saved />
    <Recent />

    

  </main>


  
);
}




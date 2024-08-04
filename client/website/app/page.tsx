import Navbar from '../app/components/Navbar';
import IntroBox from "./components/intro-box";
import Recent from "./components/recent";
import Saved from "./components/saved";
import TopMatches from "./components/top-matches";
import React from "react";
import Head from 'next/head'

export default function Home() {
  return (
    <>
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
    </>

  );

}





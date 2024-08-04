import Navbar from "../components/Navbar";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Dashboard() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="flex flex-col p-20">
        <h1 className="text-[#468FE1] text-[50px] font-bold font-spaceGrotesk">Your Submitted Applications</h1>
        <h1 className="text-[#808080] text-[20px] font-spaceGrotesk">4 TOTAL APPLICATIONS</h1>

        <div className="flex items-center py-7">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#468FE1] focus:border-transparent"
              disabled
            />
        </div>

        <div className="flex flex-col justify-between bg-white border-gray-300 border-2 rounded-lg p-5">
          <h1 className="text-black text-[27px] font-bold font-spaceGrotesk">Tasks</h1>
          <div className="flex items-center space-x-2">
            <IoIosCheckmarkCircle className="text-black" />
            <h1 className="text-[#808080]">20 tasks completed this month</h1>
          </div>
        </div>
      

      </div>
    </main>
    
  );
}




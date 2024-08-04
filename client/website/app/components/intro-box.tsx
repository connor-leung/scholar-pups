import { MdOutlinePerson } from "react-icons/md";
import { LuPackageSearch } from "react-icons/lu";
import { BsBackpack2 } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const IntroBox = () => {
    return (
    <div className="flex flex-col px-20 pt-10">
        <h1 className="text-[#468FE1] text-5xl font-spaceGrotesk font-bold">
            Hey Jordan!👋
        </h1>
        <h2 className="pt-2 text-[#808080] text-[25px] font-spaceGrotesk">
            Check out your saved scholarships and applications below!
        </h2>
        <div className="flex justify-end px-20 -mt-12">
            <img src="carpet-dog.svg"/>
        </div>
        
        <div className="bg-white rounded-lg max-w-l border-2 border-[#808080] -mt-12 flex flex-col">
            <div className="justify-start pl-2 pr-2 pt-2">
                <h1 className="text-[#101827] font-spaceGrotesk pt-5 pl-5 pr-5 font-bold text-[25px]">Get started with Scholar-Pups</h1>
                <h2 className="text-[20px] font-spaceGrotesk pl-5 pb-10 text-[#808080]">Complete a few steps to land your next scholarship</h2>
            </div>

        <div className="flex pl-5 pr-5 pb-10 space-x-4">
            <div className="bg-white rounded-lg p-4 border-2 border-[#808080] flex-1">
                <MdOutlinePerson className="text-[#468FE1] text-5xl"/>
                <div className="flex flex-col pb-7 p-1">
                    <h1 className="font-spaceGrotesk text-[#101827] font-bold">Complete your profile</h1>
                    <h2 className="text-black font-spaceGrotesk">Add more details to qualify for more scholarships</h2>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 border-2 border-[#808080] flex-1">
                <LuPackageSearch className="text-[#468FE1] text-5xl"/>
                <div className="flex flex-col pb-7 p-1">
                    <h1 className="font-spaceGrotesk text-[#101827] font-bold">Download Chrome Extension</h1>
                    <h2 className="text-black font-spaceGrotesk">Install the Scholar-Pups Chrome Extension to autofill your scholarship application</h2>
                </div>
        </div>
            <div className="bg-white rounded-lg p-4 border-2 border-[#808080] flex-1">              
                <BsBackpack2 className="text-[#468FE1] text-5xl"/>
                <div className="flex flex-col pb-7 pt-2">
                <h1 className="font-spaceGrotesk text-[#101827] font-bold">Update your extracurricular</h1>
                <h2 className="text-black font-spaceGrotesk">Easily keep your application up to date</h2>
                </div>
                <div className="flex justify-end -mr-7 -mt-[80px]">
                <IoIosArrowDroprightCircle className="text-[#468FE1] text-5xl"/>
                </div>
            </div>
        </div>
        </div>
    </div>
);
};

export default IntroBox;
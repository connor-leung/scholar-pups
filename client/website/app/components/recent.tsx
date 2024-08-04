const Recent = () => {
    return (
        <>
            <div className="flex flex-col px-20">
                <div>
                    <h1 className="text-[#808080] text-[20px] font-spaceGrotesk font-bold">Recent Searches</h1>
                </div>
            </div>
            
            <div className="flex flex-row space-x-5 px-20 pt-5 pb-10">
                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <img className="h-20" src="td.svg" alt="TD Logo" />
                        <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                            <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$70,000 CAD</h1>
                        </div>
                    </div>
                        <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">TD Community Scholarship</h1>
                        <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on August 9th • Canada</h1>
                    <div className="mt-4 pt-2 w-full border-t-2 border-[#f0f0f0] flex justify-between">
                        <h1 className="text-black font-spaceGrotesk text-[#3F525B]">Save</h1>
                        <h1 className="text-black font-spaceGrotesk text-[#3F525B]">More Details</h1>
                    </div>
                </div>

                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <img className="h-20" src="grantme.svg" alt="GrantMe Logo" />
                        <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                            <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$500 CAD</h1>
                        </div>
                    </div>
                        <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">GrantMe Scholarship</h1>
                        <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on December 9th • Canada</h1>
                        <div className="mt-4 pt-2 w-full border-t-2 border-[#f0f0f0] flex justify-between">
                            <h1 className="text-black font-spaceGrotesk text-[#3F525B]">Save</h1>
                            <h1 className="text-black font-spaceGrotesk text-[#3F525B]">More Details</h1>
                        </div>
                    </div>

                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <img className="h-20" src="desjardins.svg" alt="Desjardins Logo" />
                        <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                            <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$2,000 CAD</h1>
                        </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">Desjardins Scholarship</h1>
                    <h1 className="text-[#808080] text-[13px]">Due on June 5th • Canada</h1>
                    <div className="mt-4 pt-2 w-full border-t-2 border-[#f0f0f0] flex justify-between">
                        <h1 className="text-black font-spaceGrotesk text-[#3F525B]">Save</h1>
                        <h1 className="text-black font-spaceGrotesk text-[#3F525B]">More Details</h1>
                    </div>
                </div>

                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <img className="h-20" src="interior.svg" alt="interior Logo" />
                        <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                            <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$1,000 CAD</h1>
                        </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">Interior Savings Scholarship</h1>
                    <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on May 29th • Canada</h1>
                    <div className="mt-4 pt-2 w-full border-t-2 border-[#f0f0f0] flex justify-between">
                        <h1 className="text-black font-spaceGrotesk text-[#3F525B]">Save</h1>
                        <h1 className="text-black font-spaceGrotesk text-[#3F525B]">More Details</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recent;

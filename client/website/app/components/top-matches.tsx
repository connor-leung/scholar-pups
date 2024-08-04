import { FaLongArrowAltRight } from "react-icons/fa";

const TopMatches = () => {
    return (
        <>
            <div className="flex flex-col px-20 pt-10">
                <div className="flex justify-between">
                    <h1 className="text-[#808080] text-[20px] font-spaceGrotesk font-bold">Top Matches</h1>
                    <div className="flex items-center">
                        <h1 className="text-[#808080] text-[20px] font-spaceGrotesk font-bold">Browse More</h1>
                        <FaLongArrowAltRight className="text-[#808080] text-3xl pl-1"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-row space-x-5 px-20 pt-5 pb-10">
                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                    <img className="h-20" src="td.svg" alt="TD Logo" />
                    <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                        <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$70,000 CAD</h1>
                    </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">TD Community Scholarship</h1>
                    <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on August 9th • Canada</h1>
                </div>

                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                    <img className="h-20" src="loran.svg" alt="Loran Logo" />
                    <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                        <h1 className="text-[#578BC7] text-[12px] font-spaceGrotes whitespace-nowrapk">$100,000 CAD</h1>
                    </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">Loran Scholar</h1>
                    <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on July 10th • Canada</h1>
                </div>

                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                    <img className="h-20" src="rbc.svg" alt="RBC Logo" />
                    <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                        <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$1,500 CAD</h1>
                    </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">RBC Scholarship</h1>
                    <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on April 12th • Canada</h1>
                </div>

                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                    <img className="h-20" src="atla.svg" alt="ATLA Logo" />
                    <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                        <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$4,000 CAD</h1>
                    </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">Diversity Scholarship</h1>
                    <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on May 19th • Canada</h1>
                </div>
            </div>
        </>
    );
};

export default TopMatches;

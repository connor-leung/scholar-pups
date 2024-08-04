const Saved = () => {
    return (
        <>
            <div className="flex flex-col px-20">
                <div>
                    <h1 className="text-[#808080] text-[20px] font-spaceGrotesk font-bold">Saved Scholarships</h1>
                </div>
            </div>
            
            <div className="flex flex-col space-x-5 px-20 pt-5 pb-10">
                <div className="bg-white rounded-lg border-2 border-[#f0f0f0] px-8 py-4 w-[330px]">
                    <div className="flex items-center justify-between mb-4">
                        <img className="h-20" src="loran.svg" alt="Loran Logo" />
                        <div className="bg-[#73AAE8] rounded-full px-4 py-1 flex items-center whitespace-nowrap" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                            <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk whitespace-nowrap">$100,000 CAD</h1>
                        </div>
                    </div>
                    <h1 className="text-[#101827] text-[20px] font-spaceGrotesk font-bold whitespace-nowrap">Loran Scholar</h1>
                    <h1 className="text-[#808080] text-[13px] whitespace-nowrap">Due on July 10th • Canada</h1>
                </div>
            </div>
        </>
    );
};

export default Saved;

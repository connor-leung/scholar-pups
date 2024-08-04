import Navbar from "../components/Navbar";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Application() {
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

          <div className="flex flex-row justify-center items-center space-x-10 pt-10">
            <table className="min-w-full divide-y divide-black">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-spaceGrotesk font-bold text-black uppercase tracking-wider">Scholarship</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-spaceGrotesk font-bold text-black uppercase tracking-wider">Location</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-spaceGrotesk font-bold text-black uppercase tracking-wider">Due Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-spaceGrotesk font-bold text-black uppercase tracking-wider">Application Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-spaceGrotesk font-bold text-black uppercase tracking-wider">Date Applied</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-spaceGrotesk font-bold text-black uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="td.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">TD Community Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    <h1 className="text-[#219713]">Submitted</h1>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 9th 2024</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$70,000 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="rbc.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">RBC Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$1,500 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="loran.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">Loran Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$100,000 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="atla.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">Diversity Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">United States</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$4,000 USD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="td.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">TD Community Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    <h1 className="text-[#219713]">Submitted</h1>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 9th 2024</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$70,000 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="rbc.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">RBC Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$1,500 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="loran.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">Loran Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$100,000 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="atla.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">Diversity Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">United States</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$4,000 USD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="td.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">TD Community Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    <h1 className="text-[#219713]">Submitted</h1>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 9th 2024</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$70,000 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="rbc.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">RBC Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$1,500 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="loran.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">Loran Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Canada</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$100,000 CAD</h1>
                  </div>
                  </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="atla.svg" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-900">Diversity Scholarship</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">United States</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 9th 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#F3B17A]" style={{ backgroundColor: 'rgba(243, 177, 122, 0.45)' }}>
                    In Progress
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="bg-[#73AAE8] rounded-full flex flex-col items-center py-1" style={{ backgroundColor: 'rgba(115, 170, 232, 0.3)' }}>
                    <h1 className="text-[#578BC7] text-[12px] font-spaceGrotesk">$4,000 USD</h1>
                  </div>
                  </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

      </div>
    </main>
    
  );
}


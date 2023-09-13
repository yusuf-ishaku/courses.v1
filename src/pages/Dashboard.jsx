import { CustomDropDown } from "../assets/components/Dropdown";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Analysis } from "../assets/components/Analysis";
import { BarChart } from "../assets/components/BarChart";
import { SearchQueryAndFind } from "../assets/components/SearchBar";
import { SalesFindLine } from "../assets/components/SalesFindLine";
import { Link } from "react-router-dom";
import { DashCards1 } from "../assets/components/DashCards1";
export const Dashboard = () =>{
    return (
        <>
        <main className="overflow-y-auto h-full bg-transparent pl-3 pt-4 pr-3 font-noirpro">
            <header className="flex flex-row items-center">
                <h2 className="text-lg font-medium mr-auto">
                    Home
                </h2>
                <CustomDropDown text={"All courses"}>
                    
                </CustomDropDown>
                <button className="flex flex-row-reverse justify-center  bg-blue-600 items-center text-sm h-10 cursor-pointer w-40 p-2 font-noirpro rounded-lg text-white border-[1px] ">
                    Download Report
                    <IoCloudDownloadOutline className="text-white mx-1"></IoCloudDownloadOutline>
                </button>
            </header>
            <section className="mx-0 mt-4 flex flex-row">
                <Analysis
                tag={"24.2%"}
                tally={68}
                head={"courses created"}
                >
                </Analysis>
                <Analysis
                head={"All Purchases"}
                tally={96}
                tag={"2.8%"}
                >

                </Analysis>
                <Analysis
                head={"My earnings"}
                tally={"$50"}
                tag={"12.8%"}
                >

                </Analysis>
            </section>
            <section className="w-full flex flex-row gap-2 mt-4 font-noirpro">
                <section className="w-8/12 h-[23rem] bg-white shadow-lg rounded-lg">
                    <header className="w-full border-b-2 h-16 p-3 flex flex-row items-center">
                        <h2 className="text-[0.9rem] font-semibold capitalize mr-auto">
                            course purchases
                        </h2>
                        <div className="bg-white w-fit h-fit flex flex-row gap-[1px] rounded-md">
                            <div
                            className="w-fit h-full px-2 text-gray-700 py-1 text-[0.9rem] bg-gray-400 rounded-l cursor-pointer"
                            
                            >
                                This Year
                            </div>
                            <div
                            className="w-fit text-[0.9rem] text-gray-400 py-1  px-2 h-fit bg-gray-200 rounded-r  cursor-pointer"
                            >Last year</div>
                        </div>
                    </header>
                    <article className="w-full px-3 mt-[-1.4rem] pb-6">
                        <BarChart></BarChart>
                    </article>
                </section>
                <section className="w-4/12 h-[23rem] bg-white shadow-lg rounded-lg">
                    <header className="w-full border-b-2 h-16 p-3 flex flex-row items-center">
                        <h2 className="text-[0.9rem] font-semibold capitalize mr-auto">
                            My Sales
                        </h2>
                        <SearchQueryAndFind
                        color={"bg-gray-200"}
                        ></SearchQueryAndFind>
                    </header>
                    <article className="w-full">
                        <SalesFindLine></SalesFindLine>
                        <SalesFindLine></SalesFindLine>
                        <SalesFindLine></SalesFindLine>
                        <SalesFindLine></SalesFindLine>
                    </article>
                    <footer className="h-auto flex flex-row items-center justify-center border-t-[2px]">
                       
                       <Link className="text-blue-400 mt-2">
                        View more
                       </Link>
                    </footer>
                </section>
            </section>
            <section className="w-full flex-row flex gap-2 mt-10 mb-10">
                <DashCards1
                text={"Your Trending courses"}
                >

                </DashCards1>
                <DashCards1
                text={"course statistics"}
                >

                </DashCards1>
                <DashCards1
                text={"website statistics"}
                >

                </DashCards1>
            </section>
        </main>
        </>
    )
}
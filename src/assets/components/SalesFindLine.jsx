// import { HiOutlineDocumentText } from "react-icons/hi"
import { CgFileDocument } from "react-icons/cg";
import { TiStar } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
export const SalesFindLine = ({bottom}) =>{
    return(
        <div className={`w-full bg-white flex flex-row items-center py-4 px-3 ${bottom ? "border-b-[2px]" : "" }`}>
            <div className="rounded-full flex flex-row items-center justify-center h-8 w-8 bg-gray-200">
                <CgFileDocument color="gray"></CgFileDocument>
            </div>
            <div className="mx-2">
                <h2 className="text-[0.8rem] text-gray-700 font-semibold">
                    Practical Leadership Skills
                </h2>
                <h4 className="text-[0.6rem] text-gray-600">
                    Jan 2, 2023
                </h4>
            </div>
            <div className="mx-2 flex flex-row items-center">
                <TiStar color={"gold"} size={15}></TiStar>
                <span className="text-[0.8rem] ml-1">
                    4.2
                </span>
            </div>
            <div className="mx-2 flex flex-row items-center ">
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
            </div>
        </div>
    )
}
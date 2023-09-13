import { SlArrowDown } from "react-icons/sl"

export const CustomDropDown = ({text}) =>{
    return(
        <>
            <div className="flex flex-row items-center cursor-pointer h-10 w-40 mx-2 p-2 font-noirpro rounded-md bg-white border-[1px] border-gray-300">
                <span className="capitalize text-sm rounded-md font-noirpro mr-auto">
                    {text}
                </span>
                <SlArrowDown size={15} className="mx-2">
                </SlArrowDown>
            </div>
        </>
    )
}
import { MdClear } from "react-icons/md";

export const ImagePreview = ({src, iurl}) =>{
    return (
        <div className="bg-gray-200 w-full h-60">
            <MdClear onClick={() =>{
                iurl("")
            }} className="absolute cursor-pointer" color="white" size={24} ></MdClear>
            <img className="object-cover w-[100%] h-[100%]" src={src}>
            </img>
        </div>
    )
}
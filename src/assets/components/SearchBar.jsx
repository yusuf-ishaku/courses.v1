import { CiSearch } from "react-icons/ci"
export const SearchQueryAndFind = ({color, query}) =>{
    return(
            <div className={`${color} w-40 h-fit  flex flex-row items-center gap-[1px] rounded-lg px-2 py-1`}>
                <input 
                value={query} 
                className={`${color} w-full text-[0.8rem] focus:outline-none focus:border-[0]`}
                
                >

                </input>   
                <CiSearch color="black"></CiSearch>         
            </div>
    )
}
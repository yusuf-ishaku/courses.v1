import { SearchQueryAndFind } from "./SearchBar";
import { SalesFindLine } from "./SalesFindLine";
import {Link} from "react-router-dom"
export const DashCards1 = ({text, path}) =>{
    return (
        <section className="w-4/12 py-1 h-fit bg-white shadow-lg rounded-lg">
            <header className="w-full border-b-2 h-16 p-3 flex flex-row items-center">
                <h2 className="text-[0.9rem] font-semibold capitalize mr-auto">
                    {text}
                </h2>
                <Link to={`/${path}`} className="text-red-400">
                        View More
                </Link>
            </header>
            <article className="w-full">
                <SalesFindLine 
                bottom={true}
                >
                </SalesFindLine>
            </article>
        </section>
    )
}
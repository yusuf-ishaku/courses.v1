import { useSelector} from "react-redux";




export const Website = () =>{
    const title = useSelector(state => state.courseCreation.title);
    const description = useSelector(state => state.courseCreation.description)

    return(
        <>
           <section className="w-full h-full bg-white shadow-xl rounded">
                <section className="w-full h-10 bg-slate-400 rounded-t">
                    <section className="flex flex-col items-center bg-blue-400 justify-center text-sm text-white p-4 font-normal text-center h-fit shadow-md">
                        <h1 className="block w-[60%] text-[0.8rem] leading-4 min-h-[1rem]">{title == "" ? "Your Course Name e.g. Full Stack Developer Course 2023" : title}</h1>
                        <h2 className="block w-[75%] text-[0.7rem] leading-4 mt-[0.1rem] min-h-[1.5rem]">{description == "" ? "Describe your course so users can better understand it e.g. full guide to becoming a full stack developer in 2023" : description}</h2>
                        <button className="bg-white w-16 rounded h-6 mt-2">
                            {'               i                  '}
                        </button>
                    </section>
                </section>
            </section>
        </>
    )
}
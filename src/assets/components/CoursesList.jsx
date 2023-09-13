import { PiSelectionAll } from "react-icons/pi";
import { useGetCoursesQuery } from "../../app/apiSlices/courseSlices";
import { CourseLine} from "./CourseLine";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom"
// import { useEffect } from "react";
// import { useState } from "react";

export const CoursesList = ({token}) =>{
    let {data, result} = useGetCoursesQuery(token);
    console.log(data)
    // console.log(data)
    return (
      <main className="w-full h-full p-3 font-noirpro">
        <header className="flex flex-col">
          <h2>Welcome back, Onome</h2>
        </header>
        <section className="flex flex-row justify-between items-center py-2">
          <h3>Your courses</h3>
          <Link to={`/courses/createnew/`}>
            <button className="flex flex-row justify-around items-center  bg-blue-600  text-sm h-8 cursor-pointer w-28 p-2 font-noirpro rounded-lg text-white border-[1px] ">
              Create New
              <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>
            </button>
          </Link>
        </section>
        <div className="flex w-full mb-3 flex-row">
            <input
              type="search"
              placeholder="Search your courses here"
              className="w-full border-gray-300 border-[1px] focus:outline-none rounded-md px-2 text-sm h-10"
            ></input>
          </div>
        <section className="bg-white p-2 csc border-gray-300 border-[1px] relative rounded-md overflow-y-auto max-h-[80%]">
          <section className="mt-6">
            {data?.length === 0 ? (
              <div className="p-3 flex flex-col items-center justify-center">
                Oops! You've not created any courses!
                <Link to={`/courses/createnew/`}>
                  <button className="flex flex-row mt-2 justify-around items-center  bg-blue-600  text-sm h-8 cursor-pointer w-28 p-2 font-noirpro rounded-lg text-white border-[1px] ">
                    Create New
                  </button>
                </Link>
              </div>
            ) 
            : 
            result?.isLoading ? 
            <div className="p-3 flex flex-col items-center justify-center w-full h-40">
                <span className="loader2"></span>
            </div>
            :
            
            (
              data?.map((x) => <CourseLine data={x} key={x.id}></CourseLine>)
            )}
          </section>
        </section>
      </main>
    );
}
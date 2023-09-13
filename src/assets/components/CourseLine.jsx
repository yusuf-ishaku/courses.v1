import {AiOutlineDollarCircle } from "react-icons/ai";
import { BsPeople} from "react-icons/bs";
// import { CustomDropDown } from "./Dropdown";
import { PiEyeThin } from "react-icons/pi";
import { PiDotsThreeCircle} from "react-icons/pi";
import { MdOutlineModeEditOutline, MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { useDeleteCoursesMutation } from "../../app/apiSlices/deleteCourseSlice";
import { useSelector } from "react-redux";
export const CourseLine = ({data}) =>{
    const [dropDisplay, setDropDisplay] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [deleteCourse, result]  = useDeleteCoursesMutation();

    const token = import.meta.env.VITE_API_KEY;

    const clearCourse = (value) => {
        deleteCourse({value, token});
    }
    return (
      <>
        {modalDisplay && (
          <div className="w-[100%] fixed flex items-center justify-center z-[999] top-0 bottom-0 left-0 right-0 modal">
            <section className="w-[65%] info h-fit p-4 rounded-md flex flex-col items-center justify-center">
              <article>
                <h2>Are you sure you want to delete this course? </h2>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-36 h-20 object-cover">
                    <img
                      className="w-36 h-20 object-cover"
                      src={`https://coursespyapi.tusksite.com:8004${data.course_image}`}
                    ></img>
                  </div>
                  <h2>Course: {data.title}</h2>
                  <h2>Date Created: 19th July 2023</h2>
                  <h2>
                    Number of users registered: {data.registered_users.length}
                  </h2>
                </div>
              </article>
              <div className="w-[50%] flex flex-row justify-between">
                <button
                  className="bg-white px-2 h-10 rounded-md border-2"
                  onClick={() => setModalDisplay(!modalDisplay)}
                >
                  Go Back
                </button>
                {result.isUninitialized ? (
                  <button
                    onClick={() => clearCourse(data.id)}
                    className="bg-red-700 px-2 rounded-md"
                  >
                    Delete
                  </button>
                ) : result.isLoading ? (
                  <button
                    className="bg-red-700 w-16 px-2 rounded-md flex flex-row items-center"
                    disabled={true}
                  >
                    <span className="loader"></span>
                  </button>
                ) : result.isSuccess ? (
                  <button disabled={true}>
                    <MdDone></MdDone>
                  </button>
                ) : (
                  <button
                    onClick={() => clearCourse(data.id)}
                    className="bg-red-700 px-2 rounded-md"
                  >
                    Delete
                  </button>
                )}
              </div>
            </section>
          </div>
        )}
        <section className="w-full font-noirpro h-24 my-5 flex flex-row items-center justify-between rounded-md p-2 mr-4">
          <div className="flex flex-row">
            <figure className="w-36 h-20 object-cover">
              <img
                className="w-36 h-20 object-cover"
                src={`https://coursespyapi.tusksite.com:8004${data.course_image}`}
              ></img>
            </figure>
            <header className="w-auto ml-2 flex flex-col">
              <h1>{data.title}</h1>
              <h3 className="flex items-center">
                <AiOutlineDollarCircle></AiOutlineDollarCircle>
                <span className="ml-1">{data.price}</span>
              </h3>
              <span className="flex items-center">
                <BsPeople></BsPeople>
                <span className="ml-1">{data.registered_users.length}</span>
              </span>
            </header>
          </div>
          <div className="mr-4 cursor-pointer">
            <PiDotsThreeCircle
              className="relative"
              onClick={() => setDropDisplay(!dropDisplay)}
              size={30}
            ></PiDotsThreeCircle>
            {dropDisplay && (
              <div className="my-3 bg-white fixed z-50 w-36 shadow-md rounded-md p-2">
                <button className="p-2 flex items-center">
                  {" "}
                  <PiEyeThin className="mr-2"></PiEyeThin>Preview
                </button>
                <button className="p-2 flex items-center">
                  <MdOutlineModeEditOutline className="mr-2"></MdOutlineModeEditOutline>
                  Edit Details
                </button>
                <button
                  onClick={() => setModalDisplay(true)}
                  className="text-red-600 p-2 flex items-center"
                >
                  <AiOutlineDelete className="mr-2"></AiOutlineDelete>Delete
                </button>
              </div>
            )}
          </div>
        </section>
      </>
    );
}
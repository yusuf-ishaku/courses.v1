import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../app/dataSlices/courseCreationSlice";
import { useState} from "react";
import { Button } from "../assets/components/Kobobutton";
import { Link, redirect, useNavigate } from "react-router-dom"
import { useCreateNewCourseMutation} from "../app/apiSlices/createCourseSlice";
import { Currencies } from "../assets/neededfiles/myownneededcurrency";
import { ImagePreview } from "../assets/components/ImagePreview";
// import { create } from "d3";



export const NewCourse = () =>{
    const defaultCourse = useSelector((state)=> state.courseCreation);
    const dispatch = useDispatch();
    const title = useSelector((state) => state.courseCreation.title);
    const description = useSelector((state) => state.courseCreation.description);
    const [formNumber, setFormNumber] = useState(1);
    const token = import.meta.env.VITE_API_KEY;
    const [numberOfTime, setNumberOfTime] = useState(0);
    const [ time, setTime] = useState("");
    const [ createCourse, result] = useCreateNewCourseMutation();
    const [ courseImage, setCourseImage ] = useState("");
    const[ coImageUrl, setCImageUrl] = useState(null);
    const [ certificateImage, setCertificateImage] = useState();
    const [ ceImageUrl, setCeImageUrl] = useState(null);
    const [coursePrice, setCoursePrice] = useState("");
    const [cashValue, setCashValue] = useState("")
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
   const setFormNext = () =>{
        setFormNumber(formNumber + 1)
   };
   
   const setFormBack = () =>{
        setFormNumber(formNumber - 1 )
   };


   
    const setCourse = (type, value, tobj) =>{
        let newObj = {...tobj};
        newObj[type] = value;
        dispatch(updateCourse(newObj));
        // console.log(defaultCourse);
        // setDefaultCourse();
    };
    
    const HandleImageGet = (e, tag) => {
       
        if(tag === "course"){
            let file = e.target.files[0];
            setCourseImage(file);
            setCImageUrl(URL.createObjectURL(file))
        }
        if(tag === "certificate"){
            let file = e.target.files[0];
            setCertificateImage(file);
            setCeImageUrl(URL.createObjectURL(file));
        }
    }

    const handleCreateCourse = (course, token) => {
        // console.log(token)
        let newCourse = {...course};
        let formData = new FormData();
        formData.append("title", newCourse.title);
        formData.append("vendor", newCourse.vendor);
        formData.append("description", newCourse.description);
        formData.append("duration", newCourse.duration);
        formData.append("has_discount", newCourse.has_discount);
        formData.append("onetime_payment", newCourse.onetime_payment);
        formData.append("recurring_payment", newCourse.recurring_payment);
        formData.append("price", newCourse.price);
        formData.append('activation_status', newCourse.activation_status);
        formData.append("category", 1);
        formData.append("course_image", courseImage);
        formData.append("registered_users", 1);
        formData.append("discount_percentage", newCourse.discount_percentage);
        formData.append("certificate", certificateImage);
        // console.log(newCourse);
        setDisabled(true)
        createCourse({formData, token}).then((res) => {
            console.log(res);
            if(res.data){
                setDisabled(false);
               navigate("/courses");
            }
        });
    }

    const selectPaymentDuration = (value, target) =>{
        const course = {...target}
        if(value === "onetime_payment"){
            setCourse(value, true, defaultCourse);
            setCourse("recurring_payment", false, course);
        }
        else if(value === "recurring_payment"){
            setCourse(value, true, defaultCourse);
            setCourse("onetime_payment", false, course);
        }
    }   

    return (
       <main className="w-[100%] h-[100vh] rounded-md shadow text-gray-900 font-noirpro">
            <header className="mb-2 w-[100%] flex flex-row justify-between p-6 md:px-16 ">
                <h2 className="ml-3 text-lg">
                    Create New Course
                </h2>
                <Link to="/courses">
                    <Button color={"bg-red-700"}>
                        Go Back
                    </Button>
                </Link>
              
            </header>
            <section className='w-[100%] flex flex-row md:px-16'>
                <section className="w-[35%] p-1 relative overflow-auto">
                    <form onSubmit = {(e) => e.preventDefault()} className="w-[100%]">
                        {
                            formNumber == 1 && (
                            <div className="w-[100%] flex flex-col p-1 px-3 mr-8">
                                <div className="w-full flex flex-col">
                                    <label htmlFor="Course Title">Course Title</label>
                                    <input value={title} onChange={(e) => setCourse("title", e.target.value, defaultCourse)}  type="text" className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                    </input>
                                </div>
                                <div className="w-full flex flex-col mt-2">
                                    <label htmlFor="Course Description">Course Description</label>
                                    <textarea value={description} rows={3} cols={5} onChange={(e) => setCourse("description", e.target.value, defaultCourse)} className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                    </textarea>
                                </div>
                            </div> 
                            )
                            ||
                            formNumber == 2 && (
                                <div className="w-[100%] flex flex-col p-1 px-3 mr-8">
                                    <div className="w-full flex flex-col mt-2">
                                        <label htmlFor="Course Duration">Course Duration</label>
                                        <div className="flex flex-row">
                                            <select onChange={(e) => setNumberOfTime(e.target.value)} name="--Please Select--" className="focus:outline-none mt-2 mr-3 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                                <option value="Days">
                                                    Days
                                                </option>
                                                <option value="Weeks">
                                                    Weeks
                                                </option>
                                                <option value="Months">
                                                    Months
                                                </option>
                                                <option value="Years">
                                                    Years
                                                </option>
                                            </select>
                                        <input onChange={(e) => setTime(e.target.value)} type="number" min={"1"} max={"1000"} className="focus:outline-none mt-2 mr-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                        </input>
                                            <input type="text" value={`${time} ${numberOfTime}`}  className="focus:outline-none mt-2 border-[0px] py-2 px-2 border-gray-200 rounded-md">
                                            </input>
                                        </div>
                                    </div>
                                    
                                    <section>
                                        <div className="my-4">
                                            <label htmlFor="Course Image"> 
                                                Course Image: 
                                            </label>
                                            { coImageUrl ?
                                            <>
                                               <ImagePreview iurl={setCImageUrl} src={coImageUrl}>

                                               </ImagePreview>
                                            </>
                                            :
                                            <input onChange={(e) => HandleImageGet(e, "course")} className="block mt-2" type="file">

                                            </input>   
                                            }
                                        
                                        </div>
                                        <div className="my-4">
                                            <label htmlFor="Course Certificate">Course Certificate:</label> 
                                            {   ceImageUrl ? 
                                            <>
                                                <ImagePreview iurl={setCeImageUrl} src={ceImageUrl}></ImagePreview>
                                            </>
                                            :
                                            <input onChange={(e) => HandleImageGet(e, "certificate")} className="block mt-2" type="file">
                                            </input>
                                            }
                                            
                                        </div>
                                    </section>
                                </div> 
                            )
                            ||
                            formNumber == 3 && (
                                <section>
                                <header className="w-[100%] flex flex-col p-1 px-2 mr-8">
                                    Set Payment Type
                                </header>
                                <div className="w-full flex flex-row p-4 justify-around h-fit">
                                  <select onChange={(e) => selectPaymentDuration(e.target.value, defaultCourse)} className="w-full p-2">
                                    <option value="one_timepayment">
                                        One Time Payment
                                    </option>
                                    <option value="Recurring Payment">
                                        Recurring Payment
                                    </option>
                                  </select>
                                </div>
                                <section>
                                    <header>
                                        <h2>Price</h2>
                                    </header>
                                    <article>
                                        <select onChange={(e) => setCashValue(e.target.value)} className="focus:outline-none mt-2 mr-3 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                            {
                                                Currencies?.map((x,y) => <option value={x.symbol} key={y}>{x.symbol} {x.name}</option>)
                                            }
                                        </select>
                                        <input  className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md" type="number" name="Price" id="price" onChange={(e) => {setCourse("price", e.target.value, defaultCourse); setCoursePrice(e.target.value)}}/>
                                    </article>
                                </section>
                                <article>
                                    <h3>
                                       
                                    </h3>
                                </article>
                            </section>
                            ) 
                        }
                        <div className="flex flex-row justify-end mt-3">
                            { formNumber > 1 &&
                                <Button text={"text-gray-900"} fn={setFormBack} >
                                    Back
                                </Button>
                            }
                            <Button fn={formNumber == 3 ? () => { handleCreateCourse(defaultCourse, token) }  : () => setFormNext() } disabled={disabled} color="bg-gray-900 align-end ml-auto">
                                {formNumber == 3 ? result?.isLoading ? <div className="loader"></div> : "Submit" : "Next"}
                            </Button>
                        </div>
                    </form>
                </section>
                <div className="w-[60%]  h-[100%] p-5 mx-4">
                    <header>
                        <h2>
                            Course Preview
                        </h2>
                        <h4>
                            This is what your course will look like to your users
                        </h4>
                    </header>
                    <section className="w-full h-full bg-white shadow-xl rounded">
                        <section className="w-full h-10 bg-slate-400 rounded-t">

                        </section>
                        <section className="flex flex-col items-center bg-blue-400 justify-center text-sm text-white p-4 font-normal text-center h-fit shadow-md">
                            <h1 className="block w-[60%] text-[0.8rem] leading-4 min-h-[1rem]">{title == "" ? "Your Course Name e.g. Full Stack Developer Course 2023" : title}</h1>
                            <h2 className="block w-[75%] text-[0.7rem] leading-4 mt-[0.1rem] min-h-[1.5rem]">{description == "" ? "Describe your course so users can better understand it e.g. full guide to becoming a full stack developer in 2023" : description}</h2>
                            <button className="bg-white w-16 rounded h-6 mt-2">
                                {'               i                  '}
                            </button>
                        </section>
                    </section>
                </div>
            </section>
       </main>
    )
}
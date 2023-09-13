import { CoursesList } from "../assets/components/CoursesList";
export const Courses = () =>{
    
    const token = import.meta.env.VITE_API_KEY;
    return (
        <>
         <CoursesList token={token}></CoursesList>
        </>
    )
}
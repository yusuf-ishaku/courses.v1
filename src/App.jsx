import { useState } from 'react'
import Webtusk from "./assets/logo.svg"
import { Link, Outlet, NavLink } from 'react-router-dom';
import { RiHome2Fill } from './assets/logos/Home';
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-[100vw] h-[100vh] bg-white fixed'>
        <header className='px-8 h-[10vh] bg-white border-b-[2px] '>
          <nav className='flex flex-row h-full items-center p-[1rem]'>
            <span className='w-32 h-full flex flex-col justify-center items-center align-middle'>
               <img src={Webtusk}>
               </img>
            </span>
          </nav>
        </header>
        <main className='flex flex-row'>
          <aside className='w-[15%] h-[90vh] bg-white pt-10'>
            <nav className={"flex flex-col font-noirpro pl-1 mr-10"}>
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive' } to="/dashboard">
                <RiHome2Fill></RiHome2Fill> 
                <span className='ml-2'>
                  Home
                </span>
              </NavLink>
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive'} to="/courses">
                <RiHome2Fill></RiHome2Fill>
                <span className='ml-2'>
                  Courses
                </span>
              </NavLink>
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive'} to="/website">
                <RiHome2Fill></RiHome2Fill>
                <span className='ml-2'>
                  Website
                </span>
              </NavLink>          
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive'} to="/settings">
                <RiHome2Fill></RiHome2Fill>
                <span className='ml-2'>
                  Settings
                </span>
              </NavLink>  
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive'} to="/profile">
                <RiHome2Fill></RiHome2Fill>
                <span className='ml-2'>
                  Profile
                </span>
              </NavLink>    
              {/* <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive'} to="/dashboa">
                <RiHome2Fill></RiHome2Fill>
                <span className='ml-2'>
                 Back to Main Menu
                </span>
              </NavLink>   */}
            </nav>  
          </aside>
          <main className='w-[85%] px-4 sm:px-40 md:px-28 2xl:px-80 py-4 h-[94vh] bg-[#efefef]'>
            <Outlet></Outlet>
          </main>
        </main>
       
      </main>
    </>
  )
}



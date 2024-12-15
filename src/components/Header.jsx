import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import ThemeBtn from "./ThemeBtn";
import logoUrl from '../assets/logo.png'

export default function Header({obj}){
  const [menu,setMenu] = useState(false)
  return(
    <>
    
    {
      /* Overlay for sideBar */
      obj.slide&&
      <div 
      onClick={()=>obj.setSlide(s=>!s)}
      className="inset-0 z-[9]  opacity-[50%] visible md:hidden fixed bg-black">
      </div>
    }

    <div className="sticky top-0 left-0 right-0 bg-white flex items-center justify-between p-2 shadow-md z-[5] dark:shadow-slate-600 dark:bg-slate-900 duration-150 select-none">


      <button 
      onClick={()=>obj.setSlide(s => !s)}
      className="px-2 py-1 active:text-green-600 rounded-md dark:text-white">
        <GiHamburgerMenu />
      </button>
      
      
      <p className="mx-[10px] flex ">
        <span className="text-green-600 dark:text-green-400 text-2xl font-bold mr-2">Datrix</span>
        <img src={logoUrl} width='30px' />
      </p>

      
      <ThemeBtn />
      

      <BsThreeDots
         onClick={()=> setMenu(!menu)}
         className="dark:text-white cursor-pointer md:hidden visible" />

      

      <ul 
      className={`select-none
        ${menu ? 'max-h-[150px]' : 'max-h-0'}
      md:flex md:max-h-[150px] md:pt-0 pt-3 gap-1 right-menu items-center overflow-hidden dark:bg-slate-900 bg-white`}>        
        <li className="md:px-2 px-4 md:py-1 md:rounded-md ">About</li>
        <li className="md:px-2 px-4 md:py-1 md:rounded-md ">Pricing</li>
        <li className="md:px-2 px-4 md:py-1 md:rounded-md ">Contact</li>
      </ul>
    </div>

    </>
  )
}

import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import { useState } from "react";
export default function ThemeBtn() {

  const [theme,setTheme] = useState(false)
  function toggle(){
    document.querySelector('html').classList.toggle('dark')
    setTheme(t=>!t)
  }

  return (
    <div className=" border-slate-300 border-2 px-1 py-[2px] w-[55px] float-right rounded-2xl  ml-auto mr-3  cursor-pointer dark:bg-white shadow-inner dark:border-slate-200
    duration-150 transition-colors"
      onClick={toggle} >
      <div
       className="duration-[500ms] dark:translate-x-[24px]">
        {
          (theme) ?
          <FaMoon className="text-slate-900 w-[20px] h-[20px] duration-500" /> :
          <IoMdSunny className="text-orange-600 w-[20px] h-[20px] duration-500" />
        }
      </div>

    </div>
  )
}
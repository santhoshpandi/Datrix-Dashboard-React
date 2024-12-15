import { FaLinkedin } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
export default function Footer(){
  return(
    <div className="dark:bg-slate-900 dark:text-white bg-green-700 dark:shadow-md dark:shadow-slate-300 dark:border-white py-3  text-white text-center flex flex-col gap-2 justify-between items-center">
      <ul className='flex justify-center gap-2 '>
        <li className='w-7  hover:scale-110 duration-150 hover:shadow-yellow-400 '>
          <a href="https://www.linkedin.com/in/santhoshpandi543/">
          <FaLinkedin className="size-5" /></a>
        </li>
        <li className='w-7  hover:scale-110 duration-150 hover:shadow-yellow-400 '>
          <a href="https://github.com/santhoshpandi/"><FaGithub className="size-5" /></a>
        </li>
        <li className='w-7  hover:scale-110 duration-150 hover:shadow-yellow-400 '>
          <a href="https://santhoshpandi.github.io/RockPaperScissor/"><IoGameController className="size-5" /></a>
        </li>
      </ul>
      
      <div className="text-white">
        &copy; 2024  SanthoshPandi🦋
      </div>
    </div>
  )
}
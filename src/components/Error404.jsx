import imgUrl from '../assets/error_gif.gif'
import { TbHandClick } from "react-icons/tb";
export default function Error404(){
  return(
    <>
    <div className="flex w-[100%] items-center justify-center min-h-screen text-green-600 bg-slate-50 dark:bg-green-600 dark:text-white flex-col gap-5">
    <img src={imgUrl} alt="Error Loading" className='h-[50vh] mix-blend-darken dark:mix-blend-normal dark:rounded-md' />
      <div className="text-center ">
      
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="mt-2">Please check the URL or return to the homepage.</p>
        <br />
        <a href="/Datrix-Dashboard-React/" className='flex items-center justify-center underline hover:text-blue-600 duration-150 text-[18px]'>HomePage<TbHandClick /></a>
      </div>
    </div>
    </>
  )
}
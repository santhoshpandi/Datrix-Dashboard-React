import items from '../nav'
import SideBarItems from "./SideBarItems"

export default function SideBar() {
    
  return (
    <div className="block duration-150 ">
      <div className="sticky top-0 left-0 text-lg bg-green-600 text-white flex justify-between items-center p-2 shadow-md duration-150
      dark:bg-slate-900  dark:border-slate-50">
        <p className="font-semibold px-2 py-1.5">Navigator</p>
        <span className="px-2 py-1.5">Beta😇</span>
      </div>

     <SideBarItems  items={items} />

    </div>
  )
}
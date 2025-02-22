import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function (props) {

  const items = props.items
  const [slideMenu, setSlideMenu] = useState({})

  function toggleMenu(index) {
    setSlideMenu((prevState) => ({
      ...!prevState, //remaining set to false
      [index]: !prevState[index],
    }));
  }

  function navGroup(item, index) {
    return (
      <li key={index} className="border-y">
        <button
          onClick={() => toggleMenu(index)}
          className="w-[100%] text-left">

          <Link
            className="w-full  px-4 py-2 flex justify-between items-center"
            to={item.path}>{item.name} <IoIosArrowDropdown />
          </Link>

        </button>
        <ul
          className={`duration-300  pointer overflow-y-scroll no-scrollbar px-2
                  ${slideMenu[index] ? 'max-h-[100vh] ' : 'max-h-0'}`} >

          {
            item.items.map((item, index) => {
              return navItem(item, index)
            })
          }

        </ul>
      </li>
    )
  }

  function navItem(item, index) {
    return (
      <li key={index} className="border-y">

        {/* while creating the menu, it also links the path of the router by using Link tag... the path is given to nav.js */}
        <Link
          className="w-full px-4 py-2 block duration-150"
          to={item.path}>{item.name}</Link>
      </li>
    )
  }


  return (


    <ul className="flex flex-col menu overflow-y-scroll no-scrollbar">

      {
        //Study the nav.js for better understanding💖
        items &&
        items.map((item, index) => {

          //If the menu has subdivisions Eg. (Layout -> tablet,mobile)
          if (item.items) {
            return navGroup(item, index)
          }
          //If menu have only name Eg. (Home)
          else {
            return navItem(item, index)
          }
        })
      }

    </ul>
  )
}
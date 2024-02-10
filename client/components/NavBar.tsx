import React from 'react'

// icons
import { TiHomeOutline } from "react-icons/ti"
import { TbPigMoney } from "react-icons/tb"
import { MdEventAvailable } from "react-icons/md"
import { FaChartLine } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"

// components 
import { NavLink } from '@components/NavLink'

function NavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[50px] bg-gray-100 flex items-center justify-around shadow">
        <NavLink href="/home" exact className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white border-2">
            <TiHomeOutline />
        </NavLink>
        <NavLink href="/home" exact className="">
            <TbPigMoney />
        </NavLink>
        
        <button className="relative -top-[30%] w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center text-white"><IoMdAdd /></button>

        <NavLink href="/home" exact className="">
            <MdEventAvailable />
        </NavLink>
        <NavLink href="/home" exact className="">
            <FaChartLine />
        </NavLink>
    </div>
  )
}

export default NavBar
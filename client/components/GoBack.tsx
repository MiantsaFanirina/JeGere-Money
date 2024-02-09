"use client"
import React from 'react'
import { MdArrowBackIos } from "react-icons/md"
import { useRouter } from "next/navigation"

function GoBack({home} : {home?: boolean}) {
    const router = useRouter()
    const handleBack = () => {
        if(home)
        {
            router.push('/')
        }
        else
        {
            router.back()
        }
    }
    return (
        <div className="fixed top-[20px] left-[25px] z-[999] text-2xl cursor-pointer"><div onClick={handleBack}><MdArrowBackIos /></div></div>
    )
}

export default GoBack
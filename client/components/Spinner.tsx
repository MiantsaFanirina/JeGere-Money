"use client"
import { createPortal } from 'react-dom'
import React from 'react'
import Image from 'next/image'


function Spinner() {
  return createPortal(
    <div className="z-[999] fixed w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-white text-2xl font-display tracking-widest font-bold">Please wait</h1>
        <Image src="/spinner.gif" width={200} height={200} className="" alt="spinner"/> 
    </div>
  , document.body)
}

export default Spinner
import React from "react"
import Link from "next/link"

// components
import {AuthRedirector} from "@components/Redirector"

function Landing() {

  return (
    <>
      <AuthRedirector/>

      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <div className="w-full px-6 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="font-display text-3xl tracking-wide font-bold mb-4">Managing your finances has never been easier</h1>
          <p className="text-sm text-gray-500 mb-6">Take charge of your financial well-being today and join the countless individuals who have already transformed their lives.</p>
          <Link href="login" className="bg-black px-6 py-2 rounded-sm text-white font-display font-bold">So Let's Get Started</Link>
        </div>
      </div>
    </>
  )
}

export default Landing
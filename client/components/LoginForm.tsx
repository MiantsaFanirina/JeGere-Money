"use client"
import Cookies from 'js-cookie'
import Link from 'next/link'

// components
import GoBack from "@components/GoBack"
function LoginForm ({formAction}: {formAction: any}) 
{

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const res = await formAction(formData)
    if(res.register)
    {
      Cookies.set('authToken', res.register, { expires: 31 })
      window.location.href = '/home'
    }
    else {
      console.log(res)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full h-screen flex flex-col items-center justify-center">
      <GoBack home/>
      <h1 className="text-3xl tracking-wide font-bold mb-16 font-display">Login to JeGère</h1>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="email" id="mail" name="mail" placeholder=" " className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="mail" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Email</label>
        </div>
      </div>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="password" id="password" name="password" placeholder=" " className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="password" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Password</label>
        </div>
      </div>
      <button type="submit" className="bg-black text-white font-bold w-1/2 mx-6 py-2 rounded-sm font-display text-lg mb-6">Login</button>
      <Link href="register" className="text-blue-500 underline">Create an account here {">"}</Link>    
    </form>
  )
}

export default LoginForm
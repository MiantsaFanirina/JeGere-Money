"use client"
import React, { useState } from "react"
import "@styles/Home.css"

interface FormData {
  mail: string
  password: string
  type: "login" | "register"
}

function LoginForm ({formData, handleChange, setType, handleSubmit}: any) 
{
  const submit = (e: any) => {
    e.preventDefault()
    setType("login")
    handleSubmit()
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl uppercase tracking-wide font-semibold mb-16">Login to JeGère</h1>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="mail" id="mail" placeholder=" " value={formData?.mail} onChange={handleChange} className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="mail" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Email</label>
        </div>
      </div>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="password" id="password" placeholder=" " value={formData?.password} onChange={handleChange} className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="password" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Password</label>
        </div>
      </div>
      <button onClick={submit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/2 mx-6 py-2 rounded">Login</button>
    </div>
  )
}

function RegisterForm ({formData, handleChange, setType, handleSubmit}: any) 
{
  const submit = (e: any) => {
    e.preventDefault()
    setType("register")
    handleSubmit()
  }
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl uppercase tracking-wide font-semibold mb-16">Register to JeGère</h1>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="mail" id="mail" placeholder=" " value={formData?.mail} onChange={handleChange} className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="mail" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Email</label>
        </div>
      </div>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="password" id="password" placeholder=" " value={formData?.password} onChange={handleChange} className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="password" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Password</label>
        </div>
      </div>
      <button onClick={submit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/2 mx-6 py-2 rounded">Register</button>
    </div>
  )
}

function Sign() {

  const [formData, setFormData] = useState({
    mail: "",
    password: "",
    type: "login"
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const setType = (type: string) => {
    setFormData({
      ...formData,
      type: type
    })
  }

  const handleSubmit = () => {
    console.log(formData)
  } 

  return (
    <>
      <LoginForm formData={formData} handleChange={handleChange} setType={setType} handleSubmit={handleSubmit}/>
      <RegisterForm formData={formData} handleChange={handleChange} setType={setType} handleSubmit={handleSubmit}/>
    </>
  )
}

export default Sign
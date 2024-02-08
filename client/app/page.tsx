import React from "react"
import "@styles/Home.css"

// components
import LoginForm from "@components/LoginForm"
import RegisterForm from "@components/RegisterForm"
import Auth from "@components/Auth"

// service
import { loginProcessor, registerProcessor } from "@services/auth.service"

function Sign() {
  return (
    <>
      <LoginForm formAction={loginProcessor} />
      <RegisterForm formAction={registerProcessor}/>
    </>
  )
}

export default Sign
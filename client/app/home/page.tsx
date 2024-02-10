import React from 'react'

import { NonAuthRedirector } from '@components/Redirector'

// components
import NavBar from "@components/NavBar"

function Home() {
  return (
    <>
      <NonAuthRedirector/>
      <NavBar/>
      Home
    </>
  )
}

export default Home
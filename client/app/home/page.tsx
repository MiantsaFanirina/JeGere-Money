import React from 'react'

import { NonAuthRedirector } from '@components/Redirector'

function Home() {
  return (
    <>
      <NonAuthRedirector/>
      Home
    </>
  )
}

export default Home
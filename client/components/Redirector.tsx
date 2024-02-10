"use client"
import React, { useEffect, useState } from 'react'

// spinner
import Spinner from "@components/Spinner"

export function AuthRedirector() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if AuthToken exists in the LocalStorage
    if (localStorage.getItem('authToken')) {
      // AuthToken exists, redirect to home
      window.location.href = '/home'
    } else {
      // AuthToken doesn't exist, stop loading
      setLoading(false)
    }
  }, [])

  return (
    <>
      {loading ? <Spinner /> : null}
    </>
  )
}

export function NonAuthRedirector() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if AuthToken does not exist in the LocalStorage
    if (!localStorage.getItem('authToken')) {
      // AuthToken doesn't exist, redirect to /
      window.location.href = '/'
    } else {
      // AuthToken exists, stop loading
      setLoading(false)
    }
  }, [])

  return (
    <>
      {loading ? <Spinner /> : null}
    </>
  )
}


"use client"
import React, {useEffect} from 'react'

export function AuthRedirector() {
  useEffect(() => {
    // If AuthToken exists in the LocalStorage, redirect to home
    if(localStorage.getItem('authToken')) {
      window.location.href = '/home'
    }
  }, [])
  return (
    <></>
  )
}
export function NonAuthRedirector() {
  useEffect(() => {
    // if AuthToken does not exist in the LocalStorage, redirect to /
    if(!localStorage.getItem('authToken')) {
      window.location.href = '/'
    }
  }, [])

  return (
    <></>
  )
}


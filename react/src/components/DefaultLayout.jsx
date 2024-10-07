import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
        Default
      <Outlet/>
    </div>
  )
}

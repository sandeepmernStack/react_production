import React from 'react'
import { useTheme } from '../../context/MyTheme'

function Button() {
    const {theme, setTheme} = useTheme()
  return (
   <button className='btn btn-md btn-info'
   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    Dark Mode
   </button>
  )
}

export default Button
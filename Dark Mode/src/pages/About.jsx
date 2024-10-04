import React from 'react'
import { useTheme } from '../theme-context'

const About = () => {
    const {theme}=useTheme();
  return (
    <div className={`page ${theme}`}>
    <h1>
        About Page
    </h1>
    <p>Welcome to About Page</p>
    </div>
  )
}

export default About
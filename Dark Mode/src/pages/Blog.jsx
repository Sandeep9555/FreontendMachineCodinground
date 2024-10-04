import React from 'react'
import { useTheme } from '../theme-context';

const Blog = () => {
    const {theme}=useTheme();
  return (
    <div className={`page ${theme}`}>
    <h1>
    Blog Page
    </h1>
    <p>Welcome to Blog Page</p>
    </div>
  )
}

export default Blog
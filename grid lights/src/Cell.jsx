import React from 'react'

function Cell({filled,onClick,isDesabled}) {
  return (
    <button 
     onClick={onClick}
     className={filled?"cell cell-activated":"cell"}
     disabled={isDesabled}
     ></button>
  )
}

export default Cell
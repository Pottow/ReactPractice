import React from 'react'
import "./Button.css"

const Button = ({text, btnClass, href}) => {
  return (
    <a href="" className={`btn ${btnClass}`}>
        {text}</a>
  )
}

export default Button
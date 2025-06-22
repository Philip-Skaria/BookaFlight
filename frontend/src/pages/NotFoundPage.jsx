import React from 'react'
import {Link} from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div>
        <h1>PAGE NOT FOUND</h1>
        <Link to={"/"}>
        <button>GO BACK HOME</button>
        </Link>
    </div>
  )
}

export default NotFoundPage
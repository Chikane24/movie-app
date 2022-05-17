import React from 'react'
import "../App.css"

export default function MovieListHeading(props) {
  return (
    <div className='heading'>
        <h1>{props.heading}</h1>
    </div>
  )
}

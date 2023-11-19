import React from 'react'
import './featurebutton.css';

export default function Featurebutton(props) {
  return (
    <>
     <button className='feat-btn border border-1'>
        {props.featbtn}
    </button>

    </>
  )
}

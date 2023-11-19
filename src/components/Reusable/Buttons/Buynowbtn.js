import React from 'react';
import './buynowbtn.css';

export default function Buynowbtn(props) {
  return (
    <>
    <button className='buy-btn border border-1'>
        {props.buyNowtext}
    </button>

    </>
  )
}

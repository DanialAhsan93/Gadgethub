import React from 'react';
import './buttonneed.css';

export default function Buttonneed(props) {
  return (
    <>
     <button className='need-btn border border-1'>
        {props.needtext}
    </button>

    </>
  )
}

import React from 'react';
import {IoIosArrowBack} from 'react-icons/io'

export default function Sampleprevarrow(props) {
    const { className, style, onClick } = props;

    const newLocal = 'block';
  return (
    <>
     <div
      className={className}
      style={{ ...style, display: newLocal, color: 'black', fontSize: '35px' }}
      onClick={onClick} id='nextarrow'

    >
        <IoIosArrowBack />
    
    </div>
    
        

    </>
  )
}

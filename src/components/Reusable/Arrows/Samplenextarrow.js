import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import './nextarrow.css';

export default function Samplenextarrow(props) {
    const { className, style, onClick } = props;

    const newLocal = 'block';
    return (
        <>
            {/* <div
                className={className}
                style={{ ...style, display: "block", color: "black" }}
                onClick={onClick}
            /> */}

            <div
                className={className}
                style={{ ...style, display: newLocal, color: 'black', fontSize: '35px' }}
                onClick={onClick} id='nextarrow'
            >
                <IoIosArrowForward />
            </div>
        </>
    )
}

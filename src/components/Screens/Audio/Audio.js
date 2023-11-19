import { color } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './audio.css';


export default function Audio() {
    const [showaudiolink, setshowaudiolink] = useState(false)

    const handleaudiolink = () => {
        setshowaudiolink(true)
    }
    const handleaudiolinkout = () => {
        setshowaudiolink(false)
    }
    const navlinkStyle = ({ isActive }) => {
        return {
            // fontWeight: isActive ? 'normal' : 'bold',
            textDecoration: isActive ? 'none' : 'none',
            color: isActive ? 'blue' : 'black',
            // transition:'all .3s ease-in-out'
        };
    }
    return (
        <>
            <section>
                <div
                    className='audio-links'
                    onMouseEnter={handleaudiolink}
                    onMouseLeave={handleaudiolinkout}
                >
                    <div to={'#'} className='subheader-link' style={{ cursor: 'pointer' }} >
                        Audio
                    </div>
                    <div className={`audio-hollow ${showaudiolink ? 'show' : ''}`}></div>
                    <div className={`audio-menu ${showaudiolink ? 'show' : ''}`}>
                        <ul className='ps-0'>
                            <li className='audio-submenu'>
                                <NavLink to={'/headph'} className='audio-submenu' style={navlinkStyle}>
                                    <div className='submenu-txt'>
                                        Headphone
                                    </div>

                                </NavLink>
                            </li>
                            <li className='audio-submenu'>
                                <NavLink to={'/speaker'} className='audio-submenu' style={navlinkStyle}>
                                    <div className='submenu-txt pt-sm-2'>
                                        Speaker
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

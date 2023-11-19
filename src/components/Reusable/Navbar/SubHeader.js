import React, { useEffect, useState } from 'react';
import './subheader.css';
import { Link, NavLink } from 'react-router-dom';
import Audio from '../../Screens/Audio/Audio';
import { hover } from '@testing-library/user-event/dist/hover';


export default function SubHeader() {
    const [isNavbarActive, setNavbarActive] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    const handleToggle = () => {
        setNavbarActive(!isNavbarActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > scrollY ? 'down' : 'up';
            setScrollY(currentScrollY);

            if (window.innerWidth >= 320) {
                if (scrollDirection === 'down' && currentScrollY >= window.innerHeight * 0.5) {
                    setNavbarActive(false);
                } else {
                    setNavbarActive(true);
                }
            } else {
                setNavbarActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const subHeaderStyle = {
        position: 'fixed',
        top: isNavbarActive ? '70px' : '-100px', 
        left: 0,
        right: 0,
        zIndex: 2,
        transition: 'top 0.3s ease-in-out',
    };

    const navlinkStyle = ({ isActive }) => {
        return {
            // fontWeight: isActive ? 'normal' : 'bold',
            textDecoration: isActive ? 'none' : 'none',
            color : isActive ? 'blue' : 'black',
            transition:'all .3s ease-in-out',
        };
    }
    return (
        <>
            <section className="subheader d-sm-flex d-none" style={subHeaderStyle}>
                <div className="container-fluid d-flex align-items-center">
                    <ul className='ps-0 mb-0 d-flex align-items-center'>
                        <li className='submenu-list  '>
                            <NavLink to={'/Shop'} style={navlinkStyle} className='subheader-link '>
                                <span className='link-hover' >Shop All</span>
                            </NavLink>
                        </li>
                        <li className='submenu-list  '>
                            <NavLink to={'/comp'} style={navlinkStyle} className='subheader-link '>
                                <span className='link-hover'>Computers</span>
                            </NavLink>
                        </li>
                        <li className='submenu-list  '>
                            <NavLink to={'/tab'} style={navlinkStyle} className='subheader-link ' >
                                <span className='link-hover'>Tablets</span>    
                            </NavLink>
                        </li><li className='submenu-list  '>
                            <NavLink to={'/drones'} style={navlinkStyle} className='subheader-link ' >
                               <span className='link-hover'>Drones & Cameras</span> 
                            </NavLink>
                        </li>
                        <li className='submenu-list' style={{paddingTop:'4px'}}>
                            <Audio />
                        </li>
                        <li className='submenu-list  '>
                            <NavLink to={'/mobile'} style={navlinkStyle} className='subheader-link ' >
                                <span className='link-hover'>Mobile</span> 
                            </NavLink>
                        </li><li className='submenu-list  '>
                            <NavLink to={'/tv'} style={navlinkStyle} className='subheader-link ' >
                                 <span className='link-hover'>TV & Home Cinema</span>  
                            </NavLink>
                        </li>
                        <li className='submenu-list  '>
                            <NavLink to={'/tech'} style={navlinkStyle} className='subheader-link ' >
                               <span className='link-hover'>Wearable Tech</span> 
                            </NavLink>
                        </li><li className='submenu-list  '>
                            <NavLink to={'/sale'} style={navlinkStyle} className='subheader-link ' >
                               <span className='link-hover'>Sale</span> 
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </section>

        </>
    )
}

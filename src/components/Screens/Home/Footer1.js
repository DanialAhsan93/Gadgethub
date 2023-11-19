import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer1() {
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
    <div className="container-fluid bg-body">
        <div className="row py-5 justify-content-center">
            <div className="col-xxl-2  col-md-3  footer-link Footer-after-xxl-screen">
                <h5><strong>Store Location</strong></h5>
                <p className='pt-4'>500 Terry Francine Street</p>
                <p >San Francisco, CA 94158</p>
                <p>info@mysite.com</p>
                <p>123-456-7890</p>
                <div className='footer-link2'>
                    <div className=' d-flex  justify-content-md-start justify-content-center'>

                <NavLink style={navlinkStyle} className='nav-link'><span ><i className='fab text-black ml-1 fa-facebook-f h4 p-2'></i></span></NavLink>
                <NavLink style={navlinkStyle} className='nav-link'><span ><i className='fab text-black ml-1 h4 fa-twitter p-2 '></i></span></NavLink>
                <NavLink style={navlinkStyle} className='nav-link'><span ><i className='fab text-black ml-1 fa-youtube h4 p-2 '></i></span></NavLink>
                <NavLink style={navlinkStyle} className='nav-link'><span ><i className='fab text-black me-1  fa-instagram h4 p-2 '></i></span></NavLink>
                    </div>
                </div>
            </div>
            <div className=" col-xxl-2  col-md-3  footer-link shop">
            <h5><strong>Shop</strong></h5>
                <NavLink style={navlinkStyle} to={'/shop'} className='nav-link nav-link-blue'><p className='pt-4 nav-link-blue'>Shop All</p></NavLink>
                <NavLink style={navlinkStyle} to={'/comp'} className='nav-link nav-link-blue'><p  className='nav-link-blue'>Computers</p></NavLink>
                <NavLink style={navlinkStyle} to={'/tab'} className='nav-link nav-link-blue'><p className='nav-link-blue' >Tablets</p></NavLink>
                <NavLink style={navlinkStyle} to={'/drones'} className='nav-link nav-link-blue'><p className='nav-link-blue' >Drones & Cameras</p></NavLink>
                <NavLink style={navlinkStyle} to={'/speaker'} className='nav-link nav-link-blue'><p className='nav-link-blue' >Audio</p></NavLink>
                <NavLink style={navlinkStyle} to={'/mobile'} className='nav-link nav-link-blue'><p className='nav-link-blue' >Mobile</p></NavLink>
                <NavLink style={navlinkStyle} to={'/tv'} className='nav-link nav-link-blue'><p className='nav-link-blue' >T.V & Home Cinema</p></NavLink>
                <NavLink style={navlinkStyle} to={'/tech'} className='nav-link nav-link-blue'><p className='nav-link-blue' >Wearable Tech</p></NavLink>
                <NavLink style={navlinkStyle} to={'/sale'} className='nav-link nav-link-blue'><p className='nav-link-blue' >Sale</p></NavLink>
               
            </div>
            <div className=" col-xxl-2 col-md-3 footer-link">
            <h5><strong>Customer Support</strong></h5>
                <NavLink  to={'/'} className='nav-link'><p className='pt-4'>Contact Us</p></NavLink>
                <NavLink  to={'/'} className='nav-link'><p>Help Center</p></NavLink>
                <NavLink  to={'/'} className='nav-link'><p>About Us</p></NavLink>
                <NavLink  to={'/'} className='nav-link'><p>Careers</p></NavLink>
            </div>
            <div className=" col-xxl-2 col-md-3 footer-link">
            <h5><strong>Policy</strong></h5>
                <NavLink  to={'/'} className='nav-link'><p className='pt-4'>Shipping & Returns</p></NavLink>
                <NavLink  to={'/'} className='nav-link'><p>Terms & Conditions</p></NavLink>
                <NavLink  to={'/'} className='nav-link'><p>Payment Methods</p></NavLink>
                <NavLink  to={'/'} className='nav-link'><p>FAQ</p></NavLink>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer1
import React from 'react'
import Footer1 from "../../Assets/Images/Footer1.png"
import Footer02 from "../../Assets/Images/Footer2.png"
import Footer3 from "../../Assets/Images/Footer3.png"
import Footer4 from "../../Assets/Images/Footer4.png"
import Footer5 from "../../Assets/Images/Footer5.png"
import Footer6 from "../../Assets/Images/Footer6.png"
import Footer7 from "../../Assets/Images/Footer7.png"
import Footer8 from "../../Assets/Images/Footer8.png"
import { Link } from 'react-router-dom'

function Footer2() {
  return (
    <>
     <div className="container-fluid bg-body">
        <div className="row  text-center px-5" >
            <hr />
            <span className='pt-3'>We accept the following paying methods</span>
        </div>
        <div className="row align-items-center text-center payment-images">
            <div className="col py-5">
                <img src={Footer1} alt=""  className='px-4 payment-images'/>
                <img src={Footer02} alt="" className='px-4 payment-images' />
                <img src={Footer3} alt=""  className='px-4 payment-images'/>
                <img src={Footer4} alt=""  className='px-4 payment-images'/>
                <img src={Footer5} alt=""  className='px-4 payment-images'/>
                <img src={Footer6} alt=""  className='px-4 payment-images'/>
                <img src={Footer7} alt=""  className='px-4 payment-images'/>
                <img src={Footer8} alt=""  className='px-4 payment-images' />

        </div>


            
            </div>
            </div>
            <div className="container-fluid ">
              <div class="row  align-items-center text-center ">
                <div class="col pt-2"><p className='copyright'><span className='pe-1'> ©</span>2035 by Gadget Hub. Powered and secured by <Link to={"https://virtuenetz.pk/" } target={"_blank"} className=' wix-link'>VirtueNetz</Link> </p>  </div>
                {/* <div class="col">Column</div>
                <div class="col">Column</div> */}
              </div>
            </div>
    
    </>
  )
}

export default Footer2
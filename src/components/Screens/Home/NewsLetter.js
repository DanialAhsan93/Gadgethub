import React from 'react'
import SubsrcibeButton from '../../Reusable/Buttons/SubsrcibeButton'

function NewsLetter() {
  return (
    <>
    <div className="container-fluid " style={{padding:" 0px 1.8rem"}}>

<div className=" py-5 my-5" style={{background:"rgb(117, 31, 255)"}}>
    <div className="row align-items-center text-center text-white">
    <h3 className='reuse-heading'>Newsletter</h3>
    <p>Sign up to receive updates on new arrivals and special offers</p>
    </div>
        <div className="row align-items-center text-center">
            <div className="col-md-7">

            <p className='text-white'>Email*</p>
            </div>
        </div>
        <div className="row align-items-center text-center">
            <div className=" main-email" >

            <input type="email" 
            className='bg-body input-type m'
             placeholder='Your Email Here'
             style={{ paddingLeft: '20px'  }}
              />
            <div className='email-button'>

        <SubsrcibeButton 
           label="Subscribe"
        />
        </div>
            </div>

        </div>
    </div> 

           </div>
    
    
    
    
    
    </>
  )
}

export default NewsLetter
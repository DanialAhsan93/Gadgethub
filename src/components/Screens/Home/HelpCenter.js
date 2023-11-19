import React from 'react'
import HelpImage from "../../Assets/Images/HelpImage.jpg"
import HelpButton from '../../Reusable/Buttons/HelpButton';

function HelpCenter() {
  return (
    <>
    <div className="container-fluid bg-black">
        <div className="row ">
            <div className="col-md-5 p-5 align-items-center help-class-row ">
              <div className='p-4'> 

                    <h3 className='pt-3'>Need Help? Check <br />
                     Out Our Help Center</h3>
                     <p className='py-3'>I'm a paragraph. Click here to add your own text <br />
                      and edit me. Let your users get to know you.</p>
                      <div className='pt-1'>
                        <HelpButton label="Go to Help Center"/>
                          
                      </div>
              </div>
            </div>
            <div className=" col-md-7 help-class-row">
                <img src={HelpImage} className='help-class' alt="" />
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default HelpCenter
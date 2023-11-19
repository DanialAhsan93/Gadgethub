import React from 'react'
import ButtonWhite from '../../Reusable/Buttons/ButtonWhite';
import DroneImage1 from '../../Assets/Images/DroneImage.png' ;
function DroneImage() {
  return (
    <>
    
    <div className="container-fluid my-5" style={{padding:" 10px 2.3rem"}}>
             

               
             <div className="row  bg-body "  >

                  <div className='py-md-5 py-sm-2 col-md-5'>

                    <div className="p-5 align-items-center ">
                    <p><span className='span-red py-1 px-3 text-white'> Today's Special</span></p>
                    <h4 className='text-black'>Best Arial View in Town</h4>
                        <h1 className='f-150'><span className='color-purple'>30%</span><span className='text-black'>OFF</span></h1>
                        <h4 className='text-black'>on professional camera drones</h4>
                        <div className='text-black py-2 percent-30-off-p '><span >
                            Limited quantities. <br /></span><span>See product detail pages for availability.</span></div>
                        <ButtonWhite
                         label="Shop"
                         backgroundColorBeforeHover="rgb(117, 31, 255)"
                         backgroundColorAfterHover="black"
                         textColorAfterHover="white"
                         textColorBeforeHover="white"/>
                    </div>
                         </div>
                    <div className="col-md-7 drone-image">
                        <img src={DroneImage1} alt="" />
                    
                    </div>
                </div>
            </div>
    </>
  )
}

export default DroneImage
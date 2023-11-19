import React from 'react'
import Brands1 from "../../Assets/Images/Brands1.webp"
import Brands2 from "../../Assets/Images/Brands2.webp"
import Brands3 from "../../Assets/Images/Brands3.webp"
import Brands4 from "../../Assets/Images/Brands4.webp"
import Brands5 from "../../Assets/Images/Brands5.webp"
function Brands() {
  return (
    <>
    <div className="container-fluid" style={{ padding: " 0px 1.8rem" }}>
        <div className='bg-body '>
          <div className="row align-items-center text-center pb-5">
            <h3 className='reuse-heading pt-4'>Brands</h3>
          </div>
          <div className="row align-items-center text-center ">
            <div className="col-12 pb-5 pt-2 d-flex justify-content-center ">
              <div className='col-2  '>

                <img src={Brands1} alt=""  className='border brands-img' />
              </div>
              <div className='col-2   '>

                <img src={Brands2} alt="" className='border brands-img' />
              </div>
              <div className='col-2   '>
                <img src={Brands3} alt="" className='border brands-img' />

              </div>
              <div className='col-2   '>

                <img src={Brands4} alt="" className='border brands-img' />
              </div>
              <div className='col-2   '>

                <img src={Brands5} alt="" className='border brands-img' />
              </div>
            </div>
          </div>

        </div>
      </div>
    
    
    </>
  )
}

export default Brands
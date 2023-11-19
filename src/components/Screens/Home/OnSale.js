import React from 'react'
import { Link, NavLink } from "react-router-dom"
import image1 from "../../Assets/Images/Sale1.jpg"
import image2 from "../../Assets/Images/Sale2.jpg"
import image3 from "../../Assets/Images/Sale3.jpg"
import image4 from "../../Assets/Images/Sale4.jpg"
import image5 from "../../Assets/Images/Sale5.jpg"
import image6 from "../../Assets/Images/Sale6.jpg"
import ButtonPurple from '../../Reusable/Buttons/ButtonPurple';
function OnSale() {
  const arry = [
    {
      id: 1,
      tittle: `Space Moon Smartwatch With Charger`,
      image: image1,
      olldPrice: "100",
      newPrice: "70"
    },
    {
      id: 2,

      tittle: `OVE Light Space 5G, 128GB`,
      image: image2,
      olldPrice: "100",
      newPrice: "70"
    },
    {
      id: 3,
      tittle: `Pilates 16" Touch Screen Laptop 24GB Memory`,
      image: image3,
      newPrice: "85",
      olldPrice: "110"
    },
    {
      id: 4,
      tittle: `Turn5 Portable Bluetooth Speaker`,
      image: image4,
      newPrice: "70",
      olldPrice: "90"
    },
    {
      id: 5,
      tittle: `Journey Glass XD Virtual Reality Headset`,
      image: image5,
      newPrice: "70",
      olldPrice: "95"
    },
    {
      id: 6,
      tittle: `H1C Indoor Wireless 1080p Network Security Camera`,
      image: image6,
      newPrice: "85",
      olldPrice: "120"
    },
  ]
  return (
    <>
      <div className="container-fluid " style={{ padding: " 0px 1.8rem" }}>
        <div className="bg-body py-5 my-5">

          <div className="row  align-items-center text-center pb-5">
            <h3 className='reuse-heading'>On Sale</h3>
          </div>
          <div className="row best-seller-row-padding justify-content-lg-start justify-content-center">
            {arry.map((props) => {
              return (


                <div className="col-lg-2 col-md-3 col-sm-5 border  my-md-3 seller-class py-4" style={{cursor:'pointer' }}>
                  <div><span className='bg-danger py-1  px-3 text-white sale-class z-inde'>SALE</span></div>

                  <div className='bestSeller-img '><img src={props.image} className='img-fluid' alt="" /></div>
                  <div className='p-2'><NavLink className="NavLink-class ">{props.tittle}</NavLink></div>
                  <div className=''><p className='bestSeller-price bestSeller-price-div '>
                    <span className='px-3'><b><del>${props.olldPrice}</del></b></span>
                    <span><b>${props.newPrice}</b></span>
                  </p>
                  </div>
                </div>
              )

            })}
            {/* <div className="col-md-2 border seller-class">
            <div><span className='span-red py-1 my-2 px-3 text-white rounded sale-class z-inde'>SALE</span></div>
            <div className='bestSeller-img'><img src={image1}   alt="" /></div>
            <div><p>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p></div>
          </div> */}
          </div>
          <div className="row align-items-center text-center">
            <div className='py-2'>

              <Link to={'/sale'}>
              <ButtonPurple label="View all" />
              </Link>

            </div>
          </div>
          <NavLink></NavLink>
        </div>
      </div>

    </>
  )
}

export default OnSale
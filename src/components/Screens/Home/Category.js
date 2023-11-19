import React from 'react'
import { Link } from "react-router-dom"
import img1 from "../../Assets/Images/Categorey1.webp"
import img2 from "../../Assets/Images/Categorey2.webp"
import img3 from "../../Assets/Images/Categorey3.webp"
import img4 from "../../Assets/Images/Categorey4.webp"
import img5 from "../../Assets/Images/Categorey5.webp"
import img6 from "../../Assets/Images/Categorey6.webp"
import img7 from "../../Assets/Images/Categorey7.webp"
import img8 from "../../Assets/Images/Categorey8.webp"
import img9 from "../../Assets/Images/Categorey9.webp"
import img10 from "../../Assets/Images/Categorey10.webp"
import { Computer } from '@mui/icons-material'
function Category() {
    const arry = [
        {
            id: 1,
            tittle: `Computer`,
            image: img1,
        },
        {
            id: 2,
            tittle: `Mobile`,
            image: img2,
        },
        {
            id: 3,
            tittle: `Drone & Camera`,
            image: img3,
        },
        {
            id: 4,
            tittle: `Sale`,
            image: img4,
        },
        {
            id: 5,
            tittle: `Tablets`,
            image: img5,
        },
        {
            id: 6,
            tittle: `Best Sellers`,
            image: img6,
        },
        {
            id: 7,
            tittle: `T.V & Home Products`,
            image: img7,
        },
        {
            id: 8,
            tittle: `Wearable & Fashion`,
            image: img8,
        },
        {
            id: 9,
            tittle: `Speaker`,
            image: img9,
        },
        {
            id: 10,
            tittle: `Headphones`,
            image: img10,
        },
    ]
    return (
        <>

            <div className="container-fluid " style={{ padding: " 0px 1.8rem" }}>
                <div className="bg-body py-5 my-5">

                    <div className="row align-items-center text-center pb-5">
                        <h3 className='reuse-heading'>Shop by Categorey</h3>
                    </div>
                    <div className="row 
                            justify-content-xxl-center justify-content-lg-center 
                            justify-content-center shopby-category-row-padding">
                        {arry.map((props) => {
                            return (

                                < div className="px-xxl-5 col-lg-2 col-md-3 col-sm-5 mx-sm-3    my-md-3 my-sm-0 align-items-center text-center" >
                                    {/* {/ {console.log('props-=-=->', props)} /} */}
                                    <Link to={props.tittle == 'Mobile' ? '/mobile' : props.tittle == 'Drone & Camera' ? '/drones' : props.tittle == 'Computer' ? '/comp' : props.tittle == 'Sale' ? '/sale' : props.tittle == 'Tablets' ? '/tab' : props.tittle == 'T.V & Home Products' ? '/tv' : props.tittle == 'Wearable & Fashion' ? '/tech' : props.tittle == 'Speaker' ? '/speaker' : props.tittle == 'Headphones' ? '/headph' : ''}>
                                        <div className='bestSeller-img2'>
                                            <img src={props.image} className='img-fluid categoty-image' alt="" />
                                        </div>
                                    </Link>
                                    <div className='align-items-center text-center pt-3'>
                                        <Link className='overflow-example nav-link text-black ' style={{ fontWeight: "700", fontFamily: "Inter", fontSize: "18px" }}><p className='category-xxl-price'><b>{props.tittle}</b></p></Link>

                                    </div>
                                </div>

                            )
                        })}
                      
                    </div>
                </div>

            </div>

        </>
    )
}

export default Category
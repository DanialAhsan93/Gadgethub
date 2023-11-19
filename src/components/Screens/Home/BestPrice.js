import React from 'react'
import BestPrice1 from "../../Assets/Images/BestPrice.png"
import ButtonWhite from '../../Reusable/Buttons/ButtonWhite';
import { Link } from 'react-router-dom';
function BestPrice() {
    return (
        <>


            <div className="container-fluid my-5" style={{ padding: " 10px 2.3rem" }}>



                <div className="row  bg-body "  >

                    <div className="col-md-7 bestprice ">
                        <img src={BestPrice1} alt="" />
                        <div className='bestprice-circle circle-container justify-content-center shadow'><h4 className='text-white ' >Best <br /> Price</h4></div>
                    </div>
                    <div className="col-md-5 p-5 align-items-center ">
                        <h4>Save up to</h4>
                        <h1 className='f-150'>$150</h1>
                        <h4>on selected laptop & tablets brands</h4>
                        <p>Terms and conditions apply</p>
                        <Link to={'/comp'}>
                            <ButtonWhite
                                label="Shop"
                                backgroundColorBeforeHover="rgb(117, 31, 255)"
                                backgroundColorAfterHover="white"
                                textColorAfterHover="black"
                                textColorBeforeHover="white" />
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BestPrice
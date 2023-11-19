import React from 'react';
import './needhelp.css';
import need1 from '../../Assets/Images2/need1.webp'
import Buttonneed from '../Buttons/Buttonneed';
export default function NeedHelp() {
    return (
        <>
            <section className='pt-sm-3'>
                <div className="container-fluid">
                <div className='row align-items-center py-sm-3  need-row'>
                    <div className="col-sm-6 px-0 d-flex flex-wrap justify-content-center need-left py-sm-5 need-bg">
                        <div className="col-sm-7 me-sm-5 py-sm-5 sub-needlft  ">
                            <h3 className='py-sm-3'>Need Help? Check Out Our Help Center</h3>
                            <p className='pb-sm-3'>I'm a paragraph. Click here to add your own text and edit me.Let your
                                users get to know you.
                            </p>
                            <Buttonneed needtext={'Go To Help Center'}/>

                        </div>
                    </div>
                    <div className="col-sm-6 px-0 need-right ">
                        <div className="d-flex justify-content-center-align-items-center">
                            <img src={need1} alt="#"   />

                        </div>

                    </div>

                </div>

                </div>
                

            </section>

        </>
    )
}

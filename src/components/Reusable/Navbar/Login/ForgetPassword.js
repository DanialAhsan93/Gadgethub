import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Link, NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from './Textlogin';
import "./login.css"
import { IoPersonCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const [otp, setOTP] = useState('');
  const navigate = useNavigate()

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // You can implement the logic to send the OTP to the user's email here
    console.log('Sending OTP to email:', values.email);

    // Clear the form after successful submission
    resetForm();
    // onSubmit();
  };

  //   const generateOTP = (length) => {
  //     const characters = '0123456789';
  //     const otpArray = [];
  //     for (let i = 0; i < length; i++) {
  //       const randomIndex = Math.floor(Math.random() * characters.length);
  //       otpArray.push(characters[randomIndex]);
  //     }
  //     return otpArray.join('');
  //   };

  //   const handleGenerateOTP = () => {
  //     console.log('Sending OTP to email:');
  //     // const newOTP = generateOTP(4); // Generate a 4-digit OTP, you can change the length as needed
  //     // setOTP(newOTP);
  //   };
  const handleNavigate = () => {
    navigate("/enterOtp");
  }
  const handleNavigateClose = () => {
    navigate("/");
  }

  return (

    <>


      <div className="container-fluid pt-5" >
        <div className="row pt-5 ">
          <div className="col-xl-6 col-lg-6 col-md-6 bg-row-img pt-5 d-none d-md-block my-row " >
            <div className='align-items-center'>
              <div className='d-flex justify-content-end Login-heading text-white pe-4' >
                <div style={{ paddingTop: "4rem" }} >


                  <h1  >Great Deals</h1>
                  <h1  >And</h1>
                  <h1 className='pb-3'>Unbeatable Values</h1>
                  <Link to={"/"} className='pt-5 text-decoration-none text-white'> <span className='border p-2 rounded '> Gadget Hub</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6  col-sm-8 ">
            <section className=' d-flex justify-content-center login-sigup-after-small-screen '>
              <div className='sign-up-div px-5 pb-3  login-form-height my-row2'>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  {({ handleSubmit }) => (
                    <div class="container  px-lg-5 px-md-n2 max-width-field" >
                      <div className="row  px-md-5 pt-3 ">

                        <div>
                          <div className="d-flex justify-content-center  align-items-center">
                            <div className="justify-content-center align-items-center">
                              <IoPersonCircle style={{ fontSize: '5rem' }} />
                              <div className='d-flex justify-content-center align-items-center'>
                                <h5 className='Login-heading'>Enter Email</h5>
                              </div>
                            </div>
                          </div>
                          <form onSubmit={handleSubmit}>
                            <div>
                              <TextField label="Email" name="email" type="email" />
                            </div>

                            <div className='text-center' style={{ paddingTop: '37px' }}>
                              <div className='justify-content-center'>
                                <button className='button-85 ' onClick={handleNavigate} style={{ width: "100%" }} >Send Otp </button>
                              </div>
                              <p className=' p-3' >{otp}</p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
            </section>
          </div>
        </div>
      </div>


    </>

  );
}

export default ForgetPassword;
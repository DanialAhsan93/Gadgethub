import React from 'react'
import { Formik } from 'formik';
import { Link, NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import "../Login/login.css"
import { TextField } from '../Login/Textlogin';
import { IoPersonCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate()

    const validate = Yup.object({


        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().min(6, 'Enter the valid Password').required('Password is required'),
    });


    const handleSubmit = (values, { resetForm }) => {
        console.log(values);


        // Clear the form after successful submission
        resetForm();
        // onSubmit(); // Call the prop function to hide the login component after submission

    };
    const handleNavigateClose = () => {
        navigate("/");
    }



    return (
        <>
            <div className="container-fluid pt-5" >
                <div className="row pt-5 justify-content-center">
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 ">
                        <section className=' d-flex justify-content-center login-sigup-after-small-screen '>
                            <div className='sign-up-div  px-sm-5 px-3 pb-3  login-form-height my-row2'>

                                <Formik
                                    initialValues={{


                                        email: '',
                                        password: '',

                                    }}
                                    validationSchema={validate}
                                    onSubmit={handleSubmit}
                                >
                                    {({ handleSubmit }) => (
                                        <div class="container  px-lg-5 px-md-n2 max-width-field" >
                                            <div className="row  px-md-5 pt-3 ">

                                                <div>
                                                    <div className="d-flex justify-content-center  align-items-center">
                                                        <div className="justify-content-center align-items-center">
                                                            <IoPersonCircle style={{ fontSize: '5rem' }} />
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <h5 className='Login-heading'>Login</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={handleSubmit}>


                                                        <TextField label="Email" name="email" type="email" />
                                                        <TextField label="Password" name="password" type="password" />
                                                        <div className='d-flex pt-4'>
                                                            <Link to={"/forgetPassword"} style={{ fontSize: "14px" }} > Forget Password?</Link>
                                                        </div>
                                                        <div className='text-center' style={{ paddingTop: '37px' }}>
                                                            <button type='submit' onClick={handleSubmit} className='button-85' style={{ width: "100%" }}>Login</button>
                                                            <div className='d-block justify-content-center d-md-flex pt-3'>
                                                                <p className='pe-2'>Don't have an Account? </p>
                                                                <Link to={"/signUp"} >Signup</Link>
                                                            </div>
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
    )
}

export default Login
//    / <div>
{/* <div className='login-bg-img pb-5' style={{
                position: 'center', top: 0, left: 0, width: '100%', height: '90vh', display: 'flex', alignItems: 'center',
                justifyContent: 'center',
            }}    >

                <div className="container pt-5">
                    <div className="row pt-5 my-row">
                        <div className="col-xl-8 col-lg-7 col-md-6 bg-row-img pt-5 d-none d-md-block my-row " >
                            <div className='align-items-center'>
                                <div className='justify-content-start ps-5 pt-3 Login-heading text-white'>

                                    <h1  >Great Deals.</h1>
                                    <h1  >Unbeatable values.</h1>
                                    <Link to={"/"} className='pt-3 text-decoration-none text-white'> <span className='border p-2 rounded '> Gadget Hub</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6  col-sm-8 ">

                            <section
                                className=' d-flex justify-content-center login-sigup-after-small-screen '
                            >
                                <div
                                    className='sign-up-div px-5 pb-3 pt-1 rounde border shadow login-form-height my-row2'
                                >

                                    <Formik
                                        initialValues={{


                                            email: '',
                                            password: '',

                                        }}
                                        validationSchema={validate}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ handleSubmit }) => (
                                            <div>
                                                <div className="d-flex justify-content-center login-header align-items-center pt-5">
                                                    <div className="justify-content-center align-items-center">
                                                        <IoPersonCircle style={{ fontSize: '5rem' }} />
                                                        <div className='d-flex justify-content-center align-items-center'>

                                                            <h5 className='Login-heading'>Login</h5>
                                                        </div>
                                                    </div>
                                                    <div className='text-center '>

                                                        <button className='login-button-close' style={{ border: "none" }} onClick={handleNavigateClose}>X</button>
                                                    </div>
                                                </div>
                                                <form onSubmit={handleSubmit}>


                                                    <TextField label="Email" name="email" type="email" />
                                                    <TextField label="Password" name="password" type="password" />
                                                    <div className='d-flex pt-4'>

                                                        <Link to={"/forgetPassword"}
                                                            // onClick={onFormToggle}  
                                                            style={{ fontSize: "14px" }} > Forget Password?
                                                            {/* {activeForm === 'login' ? 'forgetPassword' : 'Forget Password?'} 
                                                        </Link>
                                                    </div>
                                                    <div className='text-center' style={{ paddingTop: '37px' }}>
                                                        <button type='submit' className='button-85'>Login</button>
                                                        {/* <div className='d-flex pt-5'>

                                            <p>Don't Have An Account? Go to</p>
                                          
                                            <Link onClick={onFormToggle}  >
                                                {activeForm === 'signup' ? 'Login' : 'Signup'}
                                               
                                                </Link>
                                        </div> 


                                                    </div>
                                                </form>

                                            </div>
                                        )}
                                    </Formik>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div> */}

// </div>
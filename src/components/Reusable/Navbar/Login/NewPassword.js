

import React from 'react';
import { Formik } from 'formik';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from './Textlogin';
import { IoPersonCircle } from 'react-icons/io5';
import './login.css';


function NewPassword() {
    const navigate = useNavigate()
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().min(3, 'Name must have at least three characters').required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm Password Required!'),
    });

    // const navigate = useNavigate();
    const handleSubmit = (values, { resetForm }) => {
        console.log(values)


        // Clear the form after successful submission
        resetForm();
        // onSubmit(); // Call the prop function to hide the login component after submission

    };
    const handleNavigate = () => {
        navigate("/signup");
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

                                <Formik
                                    initialValues={{

                                        password: '',
                                        confirmPassword: '',
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
                                                            <div className='ps-4'>

                                                                <IoPersonCircle style={{ fontSize: '5rem' }} />
                                                            </div>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <h5 className='Login-heading'>New Password</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={handleSubmit}>
                                                        <TextField label="Password" name="password" type="password" />
                                                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                                                        <div className='text-center' style={{ paddingTop: '37px' }}>
                                                            <button className='button-85' onClick={handleSubmit} style={{ width: "100%" }} >Reset</button>


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
export default NewPassword
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from './Textlogin';
import { IoPersonCircle } from 'react-icons/io5';
import './login.css';
// import image from "../../../Assets/Images/Login-bg.webp"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {
    const [Details, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",


    })
    const navigate = useNavigate()
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().min(3, 'Name must have at least three characters').required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        mobile: Yup.string().min(11, 'Mobile number must be at least 11 characters').required('Mobile number is required'),

    });


    ;
    // { toast(error)};

    const handleSubmit = (values, { resetForm }) => {
        // console.log(values)
        register(values);

        resetForm();
        // onSubmit(); // Call the prop function to hide the login component after submission

    };

    const register = (formData) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            firstname: formData.firstName,
            lastname: formData.lastName,
            email: formData.email,
            mobile: formData.mobile,
            password: formData.password,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/register", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);

            }
            )
            .catch(error => {
                console.log('error', error);
                // notify('An error occurred while registering. Please try again.'); // Call the notify function with an error message
            });
    };

    return (
        <>
            <div className="container-fluid pt-5" >
                <div className="row pt-5 justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 bg-row-img pt-5 d-none d-md-block my-row " >
                        <div className='align-items-center'>
                            <div className='d-flex justify-content-end Login-heading text-white pe-4' >
                                <div style={{ paddingTop: "10rem" }} >


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
                            <div className='sign-up-div px-sm-5 px-3 pb-3  login-form-height my-row2'>

                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        password: '',
                                        mobile: '',
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
                                                                <h5 className='Login-heading'>Signup</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={handleSubmit}>
                                                        <TextField label="First Name" name="firstName" type="text" />
                                                        <TextField label="Last Name" name="lastName" type="text" />
                                                        <TextField label="Email" name="email" type="email" />
                                                        <TextField label="Password" name="password" type="password" />
                                                        <TextField label="Mobile" name="mobile" type="mobile" />
                                                        <div className='text-center' style={{ paddingTop: '18px' }}>
                                                            <buttton type='submit' onClick={handleSubmit} className='button-85' style={{ width: "100%" }}>Signup</buttton>
                                                            <ToastContainer
                                                                position="top-right"
                                                                autoClose={1200}
                                                                hideProgressBar={false}
                                                                newestOnTop={false}
                                                                closeOnClick
                                                                rtl={false}
                                                                pauseOnFocusLoss
                                                                draggable
                                                                pauseOnHover
                                                                theme="light" />
                                                            {/* <div className='d-block justify-content-center d-md-flex pt-3'>
                                                                <p className='pe-2'>Already have an Account? </p>
                                                                <Link to={"/signup"} >Login</Link>
                                                            </div> */}
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

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DLT, RMV } from '../../../redux/action/Action';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Featurebutton from '../../Reusable/Buttons/Featurebutton';
import './cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
    const getdata = useSelector((state) => state.cartReducer.cart);

    const [subtotal, setsubtotal] = useState(0);

    const total = () => {
        let subtotal = 0;
        getdata.forEach((items) => {
            const itemsPrice = parseFloat(items.price.replace('$', ''));
            subtotal += itemsPrice * items.quantity;

        });
        return subtotal;
    }

    useEffect(() => {
        const subtotal = total();
        setsubtotal(subtotal)
    }, [getdata])


    const dispatch = useDispatch()

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const send = (post) => {
        console.log(post);
        dispatch(ADD(post))

    }
    const handleRemoveItem = (itemId) => {
        dispatch(RMV(itemId));
    };
    return (
        <section className='cart-sec'>
            <div className="container-fluid">
                {
                    getdata.length ?

                        <div className="">
                            <div className="row px-sm-1 py-sm-5 pb-sm-3">
                                <div className="col-sm-9 pe-sm-4">
                                    <p style={{ fontSize: '20px' }}>My Cart</p>
                                    <hr />
                                </div>
                                <div className="col-sm-3 px-sm-4">
                                    <p style={{ fontSize: '20px' }}>Order Summary</p>
                                    <hr />
                                </div>

                            </div>
                            <div style={{ cursor: 'pointer' }} >
                                {
                                    getdata.map((post ) => {
                                        return (
                                            <>
                                                <div className="row ">

                                                    <div className='col-sm-9 px-sm-3 '>
                                                        <div className="row align-items-center justify-content-between">
                                                            <div className="col-sm-2 border border-1">
                                                                <img src={post?.thumbnail} alt="#" className='img-fluid cart-img' style={{objectFit:"cover"}}/>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="d-flex justify-content-center">
                                                                    <p>{post.title}</p>
                                                                    <p> {post?.price}</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-2">
                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <span className='px-2 border border-1 ' onClick={() => dlt(post.id)}>-</span>
                                                                    <p className='mb-0 px-2 border border-1 '> {post?.quantity}</p>
                                                                    <span className='px-2 border border-1 ' onClick={() => send(post)}>+</span>

                                                                </div>

                                                            </div>
                                                            <div className="col-sm-2 text-center">
                                                                <p className='mb-0'> {post?.price}</p>

                                                            </div>
                                                            <div className="col-sm-1 text-center">
                                                                <p className='mb-0'>
                                                                    <AiOutlineCloseCircle style={{ fontSize: '16px', cursor: 'pointer' }}
                                                                        onClick={() => handleRemoveItem(post.id)} />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <hr />

                                                    </div>
                                                    <div className="col-sm-3 px-sm-4  ">
                                                        <div className="row mt-sm-4 pt-sm-2 justify-content-between align-items-end">
                                                            <div className="col-sm-5 ">
                                                                <p className='ps-sm-3' style={{ fontSize: '16px' }}>SubTotal</p>

                                                            </div>
                                                            <div className="col-sm-5 ">
                                                                <p className='' style={{ fontSize: '16px' }}> ${subtotal}</p>
                                                            </div>

                                                        </div>
                                                        <hr />
                                                        <div className="row mt-sm-5 pt-sm-2 justify-content-between align-items-end">
                                                            <div className="col-sm-5 ">
                                                                <p className='ps-sm-3' style={{ fontSize: '20px' }}>Total</p>

                                                            </div>
                                                            <div className="col-sm-5 ">
                                                                <p className='' style={{ fontSize: '20px' }}> ${subtotal}</p>
                                                            </div>

                                                        </div>
                                                        <div className='mt-sm-4'>
                                                            <Featurebutton featbtn={'Checkout'} />

                                                        </div>
                                                        <div className='mt-sm-4 text-center'>
                                                            <p>Secure Checkout</p>
                                                        </div>


                                                    </div>

                                                </div>


                                            </>
                                        )

                                    })
                                }
                            </div>

                        </div>
                        :
                        <div className="card_details mt-sm-5" style={{ cursor: 'pointer' }} >
                            <div>
                                <p style={{ fontSize: '20px' }}>My cart</p>
                                <hr />
                            </div>
                            <div className='d-flex align-items-center justify-content-center mt-sm-5 pt-sm-5'>
                                <p style={{ padding: '5px 20px', fontSize: '25px' }}>Cart is empty</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <Link to={'/'} style={{ textDecoration: 'none', color: 'var(--bs-sec)' }}>
                                    <p className='cnt-link' style={{ padding: '5px 20px', fontSize: '16px' }}>
                                        Continue Browsing
                                    </p>
                                </Link>
                            </div>

                        </div>
                }
            </div>
        </section>
    )
}

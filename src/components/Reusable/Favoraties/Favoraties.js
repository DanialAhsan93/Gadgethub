import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DLT, RMV } from '../../../redux/action/Action';
import { NavLink } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io'
import './favour.css'
import { SND } from '../../../redux/action/Action';
import { EXT } from '../../../redux/action/Action';
import { BsSuitHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Favoraties() {

    const getFVR = useSelector((state) => state.favoritiesReducer.favorities);
    const isFavorite= useSelector((state) => state.favoritiesReducer.isFavorite)

    useEffect(() => {
        console.log('isFavorite changed:', isFavorite);
    }, [isFavorite])

    const dispatch = useDispatch()

    const favoritiesremove = (postId) => {
        if (isFavorite) {
            console.log('Dispatching SND action');
            dispatch(EXT(postId));
        }
    };
    const navigate = useNavigate()
    const gotomobilefeat = (post) => {
        navigate('/mblfeat', { state: { post } })
    }


    // const dlt = (id) => {
    //     dispatch(DLT(id))
    // }

    // const send = (post) => {
    //     console.log(post);
    //     dispatch(ADD(post))

    // }
    // const handleRemoveItem = (itemId) => {
    //     dispatch(RMV(itemId));
    // };

    return (
        <>
            <section className='fvr-sec'>
                <div className="container-fluid">

                    {
                        getFVR.length ?
                            (

                                <div className="row justify-content-start">
                                    <h4 className='text-center py-5'>Favourites</h4>
                                    {
                                        getFVR.map((post, id) => {
                                            return (
                                                <div key={id} className="col-xxl-2 col-xl-3
                                                 col-sm-3 border border-1 
                                                 fvr-card"
                                                //  onClick={() => gotomobilefeat(post)}
                                                //  style={{cursor:"pointer"}}
                                                >
                                                    <div  onClick={() => gotomobilefeat(post)} style={{cursor:"pointer"}}>

                                                    <img src={post?.thumbnail} alt="#" className='img-fluid' />
                                                    <div className='ps-sm-3'>
                                                        <p>{post?.title}</p>
                                                        <p style={{color:"blue"}}>{post?.price}</p>
                                                    </div>
                                                    </div>
                                                    <div className='fvr-del-icon'>
                                                        <BsSuitHeartFill style={{ fontSize: '30px', paddingRight: '10px',cursor:"pointer" }}
                                                            onClick={() => favoritiesremove(post.id)} />
                                                    </div>

                                                </div>

                                            )
                                        })
                                    }

                                </div>
                            ) :
                            (
                                <div className="container">
                                    <div className="d-flex justify-content-center align-items-center"
                                       
                                    >
                                        <h4 className='py-5' style={{ padding: '5px 20px' }}>No Favourites yet</h4>
                                    </div>
                                </div>

                            )
                    }
                    {/* {getFVR.length ? (
                                <div className="row">
                                    {getFVR.map((post) => {
                                        return (
                                            <div key={post.id} className="col-xxl col-sm-3 border border-1">
                                                <img src={post?.thumbnail} alt="#" className='img-fluid' />
                                                <p>{post?.title}</p>
                                                <p>{post?.price}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="card_details" style={{ cursor: 'pointer' }}>
                                    <div className="d-flex justify-content-end">
                                        <GrFormClose style={{ fontSize: '25px', paddingRight: '10px' }} onClick={handleClose} />
                                    </div>
                                    <p style={{ padding: '5px 20px' }}>Favorites is empty</p>
                                </div>
                            )} */}

                </div>


                {/* <div className="col-sm-2 text-center d-sm-flex justify-content-center align-items-end d-none">


                        <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFvr" aria-controls="offcanvasFvr">
                            Favorities
                        </button>

                        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1"
                            id="offcanvasFvr" aria-labelledby="offcanvasFvrLabel" >
                            <div className="py-sm-4 bg-dark" style={{ zIndex: 6 }}>
                                <div className="row justify-content-between">
                                    <div className="col-sm-3">
                                        <button type="button" className="bg-transparent border-0 fs-4" data-bs-dismiss="offcanvas"
                                            aria-label="Close">
                                            <span className="fvr-arrow text-light">
                                                <IoIosArrowBack />
                                            </span>
                                        </button>

                                    </div>
                                    <div className="col-sm-8">

                                        <h5 className="offcanvas-title text-start ps-sm-5 text-light"
                                            id="offcanvasWithBothOptionsLabel">
                                            Favorities
                                        </h5>
                                    </div>
                                </div>


                            </div>
                            <div className="offcanvas-body">
                                {
                                    getFVR.length ?

                                        <div className="card_details">
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th className='pe-4'>Product</th>
                                                        <th className='ps-4'>Details</th>

                                                    </tr>
                                                </thead>
                                                <tbody style={{ cursor: 'pointer' }} >
                                                    {
                                                        getFVR.map((post) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td >
                                                                            <NavLink to={`/fvr/${post.id}`} >
                                                                                <div>

                                                                                    <img src={post?.thumbnail} alt="#" className='img-fluid' />

                                                                                </div>

                                                                            </NavLink>
                                                                        </td>
                                                                        <td>
                                                                            <p>{post.title}</p>
                                                                            <p>{post.brand}</p>
                                                                            <p>Price : {post?.price} Rs</p>
                                                                            <div className='d-flex align-items-center'>
                                                                                <span className='pe-3' onClick={() => dlt(post.id)}>-</span>
                                                                                <p className='mb-0'> {post?.quantity}</p>
                                                                                <span className='ps-3' onClick={() => send(post)}>+</span>

                                                                            </div>
                                                                            <p>
                                                                                <AiTwotoneDelete style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }}
                                                                                    onClick={() => favoritiesremove(post.id)} />
                                                                            </p>

                                                                        </td>
                                                                    </tr>

                                                                </>
                                                            )

                                                        })
                                                    }
                                                    <p>Total : {price} Rs</p>

                                                </tbody>
                                            </table>

                                        </div>
                                        :
                                        <div className="card_details" style={{ cursor: 'pointer' }} >
                                            <div className="d-flex justify-content-end">
                      <GrFormClose style={{ fontSize: '25px', paddingRight: '10px' }} onClick={handleClose} />
                    </div>
                                            <p style={{ padding: '5px 20px' }}>Favorities is empty</p>
                                        </div>

                                }
                            </div>
                        </div>


                    </div> */}
            </section >

        </>
    )
}


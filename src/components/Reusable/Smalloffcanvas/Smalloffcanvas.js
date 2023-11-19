import React, { useState } from 'react';
import { mbldata } from '../../Screens/Mobile/Mobiledata';
import './smalloffcanvas.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setfilter } from '../../../redux/action/Action';

export default function Smalloffcanvas() {
    const [accord, setaccord] = useState(false);
    const [cost, setcost] = useState(true);
    const [color, setcolor] = useState(true);
    const [showcolor, setshowcolor] = useState(false)
    const [showcolorred, setshowcolorred] = useState(false)
    const [showcolorpurple, setshowcolorpurple] = useState(false);

    const dispatch = useDispatch()

    const handlefilter = (category) => {
        dispatch(setfilter(category));
    };


    const handleaccord = () => {
        setaccord(!accord)
    };
    const handlecost = () => {
        setcost(!cost)
    };
    const handlecolor = () => {
        setcolor(!color)
    }
    const handleshowcolor = () => {
        setshowcolor(true)
    }
    const handleshowcolorout = () => {
        setshowcolor(false)
    }
    const handleshowcolorred = () => {
        setshowcolorred(true)
    }
    const handleshowcoloroutred = () => {
        setshowcolorred(false)
    }
    const handleshowcolorpurple = () => {
        setshowcolorpurple(true)
    }
    const handleshowcoloroutpurple = () => {
        setshowcolorpurple(false)
    }
  return (
    <>
    <section>
    <div>
                                <button class="filter-mbl d-sm-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    Filter by
                                </button>

                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <button type="button" class="btn-close text-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div className="col-sm-2 ps-sm-2 pe-sm-4 pt-sm-4">
                                            {
                                                accord ?
                                                    (
                                                        <>
                                                            <div className="d-flex  justify-content-between align-items-center">

                                                                <div>
                                                                    <span className='filter-category'>
                                                                        Category
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span onClick={handleaccord} className='filter-sign'>
                                                                        <AiOutlinePlus />
                                                                    </span>
                                                                </div>
                                                            </div>

                                                        </>

                                                    ) :
                                                    (
                                                        <>
                                                            <div className="d-flex justify-content-between align-items-center">

                                                                <div>
                                                                    <span className='filter-category'>
                                                                        Category
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span onClick={handleaccord} className='filter-sign'>
                                                                        <AiOutlineMinus />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className='col pt-sm-4'>
                                                                <ul className='cat-menu ps-0'>
                                                                    <li className='cat-submenu'  onClick={() => handlefilter({ category: 'ALL' })}
                                                                     data-bs-dismiss="offcanvas">
                                                                        All
                                                                    </li>
                                                                    <li className='cat-submenu'  onClick={() => handlefilter({ category: 'Sale' })}
                                                                    data-bs-dismiss="offcanvas">
                                                                        Sale
                                                                    </li>
                                                                    <li className='cat-submenu'  onClick={() => handlefilter({ category: 'best seller' })}
                                                                    data-bs-dismiss="offcanvas">
                                                                        best sellers
                                                                    </li>
                                                                </ul>

                                                            </div>

                                                        </>
                                                    )

                                            }

                                            <div className='pt-4'>
                                                {
                                                    cost ?
                                                        (
                                                            <>
                                                                <div className="d-flex  justify-content-between align-items-center">

                                                                    <div>
                                                                        <span className='filter-category'>
                                                                            Price
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span onClick={handlecost} className='filter-sign'>
                                                                            <AiOutlinePlus />
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                            </>

                                                        ) :
                                                        (
                                                            <>
                                                                <div className="d-flex justify-content-between align-items-center">

                                                                    <div>
                                                                        <span className='filter-category'>
                                                                            Price
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span onClick={handlecost} className='filter-sign'>
                                                                            <AiOutlineMinus />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='col pt-sm-4 pt-3'>
                                                                    <ul className='cat-menu ps-0'>
                                                                        <li className='cat-submenu'>All</li>

                                                                    </ul>

                                                                </div>

                                                            </>
                                                        )

                                                }

                                            </div>
                                            <div className='pt-4'>
                                                {
                                                    color ?
                                                        (
                                                            <>
                                                                <div className="d-flex  justify-content-between align-items-center">

                                                                    <div>
                                                                        <span className='filter-category'>
                                                                            Color
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span onClick={handlecolor} className='filter-sign'>
                                                                            <AiOutlinePlus />
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                            </>

                                                        ) :
                                                        (
                                                            <>
                                                                <div className="d-flex justify-content-between align-items-center">

                                                                    <div>
                                                                        <span className='filter-category'>
                                                                            Color
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span onClick={handlecolor} className='filter-sign'>
                                                                            <AiOutlineMinus />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='col pt-sm-4 pt-3'>
                                                                    <ul className='clr-menu ps-0'>
                                                                        <li className='cat-submenu'>
                                                                            <div className='color-mbl' onMouseOver={handleshowcolor}
                                                                                onMouseOut={handleshowcolorout}
                                                                            >

                                                                            </div>
                                                                            {
                                                                                showcolor ? (
                                                                                    <>
                                                                                        <p className='mouse-textsmall'>: Blue</p>
                                                                                    </>
                                                                                ) :
                                                                                    (
                                                                                        ''
                                                                                    )
                                                                            }
                                                                        </li>
                                                                        <li className='cat-submenu'>
                                                                            <div className='color-mbl' onMouseOver={handleshowcolorred}
                                                                                onMouseOut={handleshowcoloroutred}>

                                                                            </div>
                                                                            {
                                                                                showcolorred ? (
                                                                                    <>
                                                                                        <p className='mouse-textsmall'>: Red</p>
                                                                                    </>
                                                                                ) :
                                                                                    (
                                                                                        ''
                                                                                    )
                                                                            }
                                                                        </li>
                                                                        <li className='cat-submenu'>
                                                                            <div className='color-mbl' onMouseOver={handleshowcolorpurple}
                                                                                onMouseOut={handleshowcoloroutpurple}>

                                                                            </div>
                                                                            {
                                                                                showcolorpurple ? (
                                                                                    <>
                                                                                        <p className='mouse-textsmall'>: Purple</p>
                                                                                    </>
                                                                                ) :
                                                                                    (
                                                                                        ''
                                                                                    )
                                                                            }
                                                                        </li>

                                                                    </ul>

                                                                </div>

                                                            </>
                                                        )

                                                }

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
    </section>

    </>
  )
}

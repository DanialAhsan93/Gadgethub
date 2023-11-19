import React, { useState } from 'react';
import '.././Salesaccordion/salesaccord.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setfilter } from '../../../redux/action/Action';

export default function Smallsalesaccord() {
    const [accord, setaccord] = useState(false);
    const [cost, setcost] = useState(true);
    const [color, setcolor] = useState(true);
    const [showcolor, setshowcolor] = useState(false)
    const [showcolorred, setshowcolorred] = useState(false)
    const [showcolorpurple, setshowcolorpurple] = useState(false)
    const [showcolororange, setshowcolororange] = useState(false)
    const [showcolorgreen, setshowcolorgreen] = useState(false)
    const [showcolorblack, setshowcolorblack] = useState(false);



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
    const handleshowcolororange = () => {
        setshowcolororange(true)
    }
    const handleshowcoloroutorange = () => {
        setshowcolororange(false)
    }
    const handleshowcolorgreen = () => {
        setshowcolorgreen(true)
    }
    const handleshowcoloroutgreen = () => {
        setshowcolorgreen(false)
    }
    const handleshowcolorblack = () => {
        setshowcolorblack(true)
    }
    const handleshowcoloroutblack = () => {
        setshowcolorblack(false)
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
                            <div className="col-sm-2 ps-sm-2 pe-sm-4 pt-sm-4 ">

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
                                                        <li className='cat-submenu' onClick={() => handlefilter({ category: 'ALL' })}
                                                            data-bs-dismiss="offcanvas">All
                                                        </li>
                                                        <li className='cat-submenu' onClick={() => handlefilter({ category: 'Drones' })}
                                                            data-bs-dismiss="offcanvas">Drones
                                                        </li>
                                                        <li className='cat-submenu' onClick={() => handlefilter({ category: 'Tv' })}
                                                            data-bs-dismiss="offcanvas">TV
                                                        </li>
                                                        <li className='cat-submenu' onClick={() => handlefilter({ category: 'Tech' })}
                                                            data-bs-dismiss="offcanvas">Werarables
                                                        </li>
                                                        <li className='cat-submenu' onClick={() => handlefilter({ category: 'Mobile' })}
                                                            data-bs-dismiss="offcanvas">Mobile
                                                        </li>
                                                        <li className='cat-submenu' onClick={() => handlefilter({ category: 'Tablet' })}
                                                            data-bs-dismiss="offcanvas">Tablet
                                                        </li>
                                                    
                                                    </ul>

                                                </div>

                                            </>
                                        )

                                }

                                {/* <div className='pt-sm-4'>
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
                                                <div className='col pt-sm-4'>
                                                    <ul className='cat-menu ps-0'>
                                                        <li className='cat-submenu'>All</li>

                                                    </ul>

                                                </div>

                                            </>
                                        )

                                }

                            </div> */}
                                <div className='pt-sm-4'>
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
                                                    <div className='col pt-sm-4'>
                                                        <ul className='clr-menushop ps-0'>
                                                            <li className='cat-submenuaccord'>
                                                                <div className='color-mbl' onMouseOver={handleshowcolorblack}
                                                                    onMouseOut={handleshowcoloroutblack}
                                                                >

                                                                </div>
                                                                {
                                                                    showcolorblack ? (
                                                                        <>
                                                                            <p className='mouse-textshop'>: Black</p>
                                                                        </>
                                                                    ) :
                                                                        (
                                                                            ''
                                                                        )
                                                                }
                                                            </li>
                                                            <li className='cat-submenuaccord'>
                                                                <div className='color-mbl' onMouseOver={handleshowcolorred}
                                                                    onMouseOut={handleshowcoloroutred}>

                                                                </div>
                                                                {
                                                                    showcolor ? (
                                                                        <>
                                                                            <p className='mouse-textshop'>: Red</p>
                                                                        </>
                                                                    ) :
                                                                        (
                                                                            ''
                                                                        )
                                                                }
                                                            </li>
                                                            <li className='cat-submenuaccord'>
                                                                <div className='color-mbl' onMouseOver={handleshowcolorgreen}
                                                                    onMouseOut={handleshowcoloroutgreen}>

                                                                </div>
                                                                {
                                                                    showcolorgreen ? (
                                                                        <>
                                                                            <p className='mouse-textshop'>: Green</p>
                                                                        </>
                                                                    ) :
                                                                        (
                                                                            ''
                                                                        )
                                                                }
                                                            </li>
                                                            <li className='cat-submenuaccord'>
                                                                <div className='color-mbl' onMouseOver={handleshowcolororange}
                                                                    onMouseOut={handleshowcoloroutorange}>

                                                                </div>
                                                                {
                                                                    showcolororange ? (
                                                                        <>
                                                                            <p className='mouse-textshop'>: Orange</p>
                                                                        </>
                                                                    ) :
                                                                        (
                                                                            ''
                                                                        )
                                                                }
                                                            </li> <li className='cat-submenuaccord'>
                                                                <div className='color-mbl' onMouseOver={handleshowcolorpurple}
                                                                    onMouseOut={handleshowcoloroutpurple}>

                                                                </div>
                                                                {
                                                                    showcolorpurple ? (
                                                                        <>
                                                                            <p className='mouse-textshop'>: Purple</p>
                                                                        </>
                                                                    ) :
                                                                        (
                                                                            ''
                                                                        )
                                                                }
                                                            </li> <li className='cat-submenuaccord'>
                                                                <div className='color-mbl' onMouseOver={handleshowcolor}
                                                                    onMouseOut={handleshowcolorout}>

                                                                </div>
                                                                {
                                                                    showcolorred ? (
                                                                        <>
                                                                            <p className='mouse-textshop'>: Blue</p>
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

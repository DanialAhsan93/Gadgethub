import React, { useState } from 'react';
import './largeoffcanvas.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { setfilter } from '../../../redux/action/Action';
import { useDispatch } from 'react-redux';
import ReactSlider from 'react-slider';


export default function Largeoffcanvas() {
    const [accord, setaccord] = useState(false);
    const [cost, setcost] = useState(true);
    const [color, setcolor] = useState(true);
    const [showcolor, setshowcolor] = useState(false)
    const [showcolorred, setshowcolorred] = useState(false)
    const [showcolorpurple, setshowcolorpurple] = useState(false);

    // const [values, setValues] = useState([Min, Max])

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
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-2 ps-sm-2 pe-sm-4 pt-sm-4 filter-columnlarge">
                {
                    accord ?
                        (
                            <>
                                <div className="d-flex  justify-content-between align-items-center">

                                    <div>
                                        <span className='filter-categorylargelarge'>
                                            Category
                                        </span>
                                    </div>
                                    <div>
                                        <span onClick={handleaccord} className='filter-signlarge'>
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
                                        <span className='filter-categorylarge'>
                                            Category
                                        </span>
                                    </div>
                                    <div>
                                        <span onClick={handleaccord} className='filter-signlarge'>
                                            <AiOutlineMinus />
                                        </span>
                                    </div>
                                </div>
                                <div className='col pt-sm-4'>
                                    <ul className='cat-menularge ps-0'>
                                        <li className='cat-submenularge' onClick={() => handlefilter({ category: 'ALL' })}>All</li>
                                        <li className='cat-submenularge' onClick={() => handlefilter({ category: 'Sale' })}>Sale</li>
                                        <li className='cat-submenularge' onClick={() => handlefilter({ category: 'best seller' })}>best sellers</li>
                                    </ul>

                                </div>

                            </>
                        )

                }

                <div className='pt-sm-4'>
                    {
                        cost ?
                            (
                                <>
                                    <div className="d-flex  justify-content-between align-items-center">

                                        <div>
                                            <span className='filter-categorylarge'>
                                                Price
                                            </span>
                                        </div>
                                        <div>
                                            <span onClick={handlecost} className='filter-signlarge'>
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
                                            <span className='filter-categorylarge'>
                                                Price
                                            </span>
                                        </div>
                                        <div>
                                            <span onClick={handlecost} className='filter-signlarge'>
                                                <AiOutlineMinus />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col pt-sm-4'>
                                        <ul className='cat-menularge ps-0'>
                                            <li className='cat-submenularge'>
                                                All
                                                <div>
                                                    {/* <label id="first-slider-label">Start slider label</label>
                                                    <label id="second-slider-label">End slider label</label> */}
                                                    {/* <ReactSlider
                                                        className="horizontal-slider"
                                                        thumbClassName="example-thumb"
                                                        trackClassName="example-track"
                                                        defaultValue={[70, 85]}
                                                        ariaLabelledby={['first-slider-label', 'second-slider-label']}
                                                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                                        pearling
                                                        minDistance={10}
                                                    /> */}
                                                    {/* <ReactSlider className='slider'
                                                        onChange={setValues}
                                                        value={values}
                                                        min={Min}
                                                        max={Max} /> */}
                                                </div>
                                            </li>

                                        </ul>

                                    </div>

                                </>
                            )

                    }

                </div>

                <div className='pt-sm-4'>
                    {
                        color ?
                            (
                                <>
                                    <div className="d-flex  justify-content-between align-items-center">

                                        <div>
                                            <span className='filter-categorylarge'>
                                                Color
                                            </span>
                                        </div>
                                        <div>
                                            <span onClick={handlecolor} className='filter-signlarge'>
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
                                            <span className='filter-categorylarge'>
                                                Color
                                            </span>
                                        </div>
                                        <div>
                                            <span onClick={handlecolor} className='filter-signlarge'>
                                                <AiOutlineMinus />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col pt-sm-4'>
                                        <ul className='clr-menularge ps-0'>
                                            <li className='cat-submenularge'>
                                                <div className='color-mbllarge' onMouseOver={handleshowcolor}
                                                    onMouseOut={handleshowcolorout}
                                                >

                                                </div>
                                                {
                                                    showcolor ? (
                                                        <>
                                                            <p className='mouse-text'>: Blue</p>
                                                        </>
                                                    ) :
                                                        (
                                                            ''
                                                        )
                                                }
                                            </li>
                                            <li className='cat-submenularge'>
                                                <div className='color-mbl' onMouseOver={handleshowcolorred}
                                                    onMouseOut={handleshowcoloroutred}>

                                                </div>
                                                {
                                                    showcolorred ? (
                                                        <>
                                                            <p className='mouse-text'>: Red</p>
                                                        </>
                                                    ) :
                                                        (
                                                            ''
                                                        )
                                                }
                                            </li>
                                            <li className='cat-submenularge'>
                                                <div className='color-mbl' onMouseOver={handleshowcolorpurple}
                                                    onMouseOut={handleshowcoloroutpurple}>

                                                </div>
                                                {
                                                    showcolorpurple ? (
                                                        <>
                                                            <p className='mouse-text'>: Purple</p>
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

        </>
    )
}

import React, { useState } from 'react';
import '../Computers/compfeat.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../../redux/action/Action';
import Buynowbtn from '../../Reusable/Buttons/Buynowbtn';
import Slider from 'react-slick';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io'
import Samplenextarrow from '../../Reusable/Arrows/Samplenextarrow';
import Sampleprevarrow from '../../Reusable/Arrows/Sampleprevarrow';
import { BsSuitHeart } from 'react-icons/bs';
import Footer1 from '../Home/Footer1';
import Footer2 from '../Home/Footer2';
import HelpCenter from '../Home/HelpCenter';
import Featurebutton from '../../Reusable/Buttons/Featurebutton';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { techdata } from './Techdata';
import { BsSuitHeartFill } from 'react-icons/bs'
import { SND } from '../../../redux/action/Action';
import { EXT } from '../../../redux/action/Action';

export default function Techfeat() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <Samplenextarrow />,
        prevArrow: <Sampleprevarrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    };

    const [slider, setslider] = useState(techdata);
    // console.log(slider)

    const location = useLocation()
    const navigate = useNavigate();

    const gotomobilefeat = (post) => {
        navigate('/techfeat', { state: { post } });
        window.scrollTo(0, 0);
    }

    const [accord, setaccord] = useState(false);
    const [cost, setcost] = useState(true);
    const [color, setcolor] = useState(true);
    // const [showcolor, setshowcolor] = useState(false)
    // const [showcolorred, setshowcolorred] = useState(false)
    // const [showcolorpurple, setshowcolorpurple] = useState(false)

    const { post } = location.state;
    const data = techdata;

    const currentProductIndex = data.findIndex((product) => product.id === post.id);

    const goToNextProduct = () => {
        const nextProductIndex = (currentProductIndex + 1) % data.length;
        navigate(`/techfeat`, { state: { post: data[nextProductIndex] } });
    };

    const goToPrevProduct = () => {
        const prevProductIndex = (currentProductIndex - 1 + data.length) % data.length;
        navigate(`/techfeat`, { state: { post: data[prevProductIndex] } });
    };

    const dispatch = useDispatch();

    const getdata = useSelector((state) => {
        return state.cartReducer.cart.find((item) => item.id === post.id) || {};
    });
    const send = (post) => {
        const priceToAdd = saleTag ? post.discprice : post.price;
        dispatch(ADD({ ...post, price: priceToAdd }));
    };

    const Throw = (post) => {
        console.log(post);
        dispatch(SND(post))

    }

    const handleaccord = () => {
        setaccord(!accord)
    };
    const handlecost = () => {
        setcost(!cost)
    };
    const handlecolor = () => {
        setcolor(!color)
    }
    // const handleshowcolor = () => {
    //     setshowcolor(true)
    // }
    // const handleshowcolorout = () => {
    //     setshowcolor(false)
    // }
    // const handleshowcolorred = () => {
    //     setshowcolorred(true)
    // }
    // const handleshowcoloroutred = () => {
    //     setshowcolorred(false)
    // }
    // const handleshowcolorpurple = () => {
    //     setshowcolorpurple(true)
    // }
    // const handleshowcoloroutpurple = () => {
    //     setshowcolorpurple(false)
    // }
    // const id = location?.state?.post.id
    const saleTag = ['Tech4', 'Tech3', 'Tech7', 'Tech6'].includes(post.id);
    const remainTag = ['Tech1', 'Tech2', 'Tech5', 'Tech8'].includes(post.id);

    const [favorites, setFavorites] = useState([]);

    const isFavorite = favorites.includes(post.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            setFavorites((prevFavorites) => prevFavorites.filter((item) => item !== post.id));
        } else {
            setFavorites((prevFavorites) => [...prevFavorites, post.id]);
        }
    };
    const favoritiesremove = (itemext) => {
        dispatch(EXT(itemext))
    }

    return (
        <>
            <div className="container">

                <section className='mobilefeat-sec'>
                    <div className="container-fluid px-md-2 px-0">
                        <div className="row justify-content-around px-xxl-0 px-xl-0 px-lg-3 px-md-4 py-sm-5 mt-sm-0 mt-4 ">
                            <div className="col-lg-8 col-md-7 col-sm-7 pe-lg-5 pe-md-0 pe-sm-0 ps-lg-4 ps-md-0 ps-sm-0 ms-lg-3 
                            ms-md-0 ms-sm-0">
                                <div className="d-sm-flex d-none  justify-content-start">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                                        <p>{location?.state?.post.link}/</p>
                                    </Link>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/tech'}>
                                    <div className="text-container2">
                                        <p className='ps-2'>{location?.state?.post.linkM}/</p>
                                    </div>
                                    </Link>
                                    <div className="text-container3">
                                    <p className='ps-2' style={{ color: '#9A9A9A' }}>{location?.state.post.title}</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center d-sm-none ' style={{ fontSize: '18px' }}>
                                    <Link to={'/tech'} style={{ textDecoration: 'none', color: 'black' }}>
                                        <span><IoIosArrowBack /></span>
                                        <span>Back to Wearable & Tech</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-5 pe-lg-5 pe-md-0 pe-sm-0">
                                <div className="d-sm-flex d-none justify-content-end align-items-center">

                                    <button onClick={goToPrevProduct} disabled={currentProductIndex === 0}
                                        className='prev-btn' >
                                        <IoIosArrowBack style={{ fontSize: '24px' }} className='pb-1' />
                                        Prev
                                    </button>
                                    <span className='px-1'>|</span>
                                    <button onClick={goToNextProduct} disabled={currentProductIndex === data.length - 1}
                                        className='prev-btn'>
                                        Next <IoIosArrowForward style={{ fontSize: '24px' }} className='pb-1' />
                                    </button>

                                </div>
                            </div>

                        </div>
                        <div className="row justify-content-center mt-sm-0 mt-5 px-lg-5 px-md-0 px-sm-0">
                            <div className="col-md-6 col-sm-6  padding-start-lg-35 pe-2 ">
                                <div className='col text-center border border-1 overflow-hidden'>
                                    <img src={location?.state?.post.thumbnail} alt="#" className='mbl-featimg img-fluid' />

                                </div>
                                <p className='text-start mt-sm-1 pt-sm-5 d-sm-flex d-none'>
                                    {location?.state?.post.description}
                                </p>

                            </div>
                            <div className="col-md-6 col-sm-6 text-start pe-lg-5 ps-sm-4">
                                <p className='sku-feat d-sm-none d-flex pt-sm-0 pt-4'>{location?.state?.post.SKU}</p>
                                <h2>{location?.state?.post.title}</h2>
                                <p className='sku-feat d-sm-flex d-none'>{location?.state?.post.SKU}</p>
                                <div className='d-flex'>
                                    {saleTag && <del className='mblprice-feat'>{location?.state?.post.price}</del>}
                                    {saleTag && <p className='mblprice-feat ps-2'>{location?.state?.post.discprice}</p>}

                                </div>
                                {remainTag && <p className='mblprice-feat'>{location?.state?.post.price}</p>}



                                <p className='mbl-quant'>Quantity</p>
                                <div className='d-flex align-items-center mt-sm-0 mt-4 '>
                                    <div className='mblqnt-sec'>
                                        <input type="number" name="quantity" id="cart-quantity"
                                            value={getdata.quantity || 0}
                                            placeholder={location?.state?.post.quantity} className='ps-2 mblqnt-qnt'
                                        />

                                    </div>
                                </div>
                                <div className="d-flex justify-content-sm-start justify-content-center
                             align-items-center mt-3">
                                    <div className='' data-bs-toggle="offcanvas" data-bs-target="#offcanvasLarge"
                                        aria-controls="offcanvasLarge"
                                        onClick={() => send(post)}>
                                        <Featurebutton featbtn={'Add to Cart'} />
                                    </div>
                                    <div className='d-sm-flex'>
                                        {isFavorite ? (
                                            <div onClick={handleToggleFavorite}>
                                                <span className='ms-2 hrt-icon ' onClick={() => favoritiesremove(post.id)}>
                                                    <BsSuitHeartFill style={{ cursor: "pointer" }} />
                                                </span>
                                            </div>
                                        ) : (
                                            <div onClick={handleToggleFavorite}>
                                                <span className='ms-2 hrt-icon ' onClick={() => Throw(post)}>
                                                    <BsSuitHeart style={{ cursor: "pointer" }} />
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>


                                <div className='mt-3 text-sm-start text-center'>
                                    <Buynowbtn buyNowtext={'Buy now'} />
                                    <p className='text-start mt-4  pt-1 d-sm-none d-flex'>
                                        {location?.state?.post.description}
                                    </p>
                                </div>
                                <div className='mt-5'>
                                    {
                                        accord ?
                                            (
                                                <>
                                                    <div className="d-flex  justify-content-between align-items-center">

                                                        <div>
                                                            <span className='filter-category'>
                                                                {location?.state?.post.Infohead}
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
                                                                {location?.state?.post.Infohead}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span onClick={handleaccord} className='filter-sign'>
                                                                <AiOutlineMinus />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col pt-sm-4'>
                                                        {location?.state?.post.description}

                                                    </div>

                                                </>
                                            )

                                    }
                                    <hr />

                                    <div className='pt-sm-2'>
                                        {
                                            cost ?
                                                (
                                                    <>
                                                        <div className="d-flex  justify-content-between align-items-center">

                                                            <div>
                                                                <span className='filter-category'>
                                                                    {location?.state?.post.Return}
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
                                                                    {location?.state?.post.Return}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span onClick={handlecost} className='filter-sign'>
                                                                    <AiOutlineMinus />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='col pt-sm-4'>
                                                            {location?.state?.post.Infodetail}
                                                        </div>

                                                    </>
                                                )

                                        }

                                    </div>
                                    <hr />
                                    <div className='pt-sm-2'>
                                        {
                                            color ?
                                                (
                                                    <>
                                                        <div className="d-flex  justify-content-between align-items-center">

                                                            <div>
                                                                <span className='filter-category'>
                                                                    {location?.state?.post.Shipinfo}
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
                                                                    {location?.state?.post.Shipinfo}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span onClick={handlecolor} className='filter-sign'>
                                                                    <AiOutlineMinus />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='col pt-sm-4'>
                                                            {location?.state?.post.ShipDecrip}

                                                        </div>

                                                    </>
                                                )

                                        }

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="container">
                            <div className="row pt-sm-5 mt-5 px-sm-5">
                                <h3 className='text-center pt-sm-3'>Related Products</h3>
                                <Slider {...settings}>

                                    {slider.map((post, id) => {
                                        const itemid = (post.id);

                                        const saleItemTag = ['Tech4', 'Tech3', 'Tech7', 'Tech6'].includes(itemid);
                                        const remainItemTag = ['Tech1', 'Tech2', 'Tech5', 'Tech8'].includes(itemid);
                                        return (
                                            <div className="d-flex flex-wrap justify-content-center mt-sm-0 mt-5">

                                                <div className="col-sm-3 mbl-title mt-sm-4 px-0 " key={id} onClick={() => gotomobilefeat(post)}
                                                    style={{ cursor: 'pointer' }}>
                                                    <img src={post?.thumbnail} alt="#" className='img-fluid mblfeat-img' />
                                                    <div className="text-start ps-3">

                                                        <p className='mb-0 text-container2' style={{ height: "3rem" }}>{post?.title}</p>
                                                        <div className='d-flex'>
                                                            {saleItemTag && <del className='' style={{ color: "blue" }}>{post.price}</del>}
                                                            {saleItemTag && <p className='ps-2' style={{ color: "blue" }}>{post.discprice}</p>}

                                                        </div>
                                                        {remainItemTag && <p className='' style={{ color: "blue" }}>{post.price}</p>}
                                                    </div>
                                                    {saleItemTag && <div className='mblfeat-sale text-center'>{post.Sale}</div>}

                                                </div>
                                            </div>

                                        )
                                    })}

                                </Slider>
                            </div>

                        </div>

                    </div>
                </section>
            </div>

            <div className='pt-5 mt-sm-5 mt-4' >
                <HelpCenter />

                <Footer1 />

            </div>
            <Footer2 />

        </>
    )
}

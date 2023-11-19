import React, { useEffect, useState } from 'react';
import ButtonPurple from '../../Reusable/Buttons/ButtonPurple';
import ButtonWhite from '../../Reusable/Buttons/ButtonWhite';
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import image1 from "../../Assets/Images/bestSeller1.jpg"
import image2 from "../../Assets/Images/bestseller2.jpg"
import image3 from "../../Assets/Images/bestSeller3.jpg"
import image4 from "../../Assets/Images/bestSeller4.jpg"
import image5 from "../../Assets/Images/bestSeller5.jpg"
import image6 from "../../Assets/Images/bestSeller6.jpg"
import imgagebg1 from "../../Assets/Images/Hero1.png"
import imgagebg2 from "../../Assets/Images/Hero2.png"
import imgagebg3 from "../../Assets/Images/Hero3.webp"
import Category from './Category';
import BestPrice from './BestPrice.js';
import OnSale from './OnSale';
import DroneImage from './DroneImage';
import Brands from './Brands';
import NewsLetter from './NewsLetter';
import HelpCenter from './HelpCenter';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import "../Chatbox/style.css"
import Chatbox from '../Chatbox/Chatbox'
import './home.css';
import { padding } from '@mui/system';
import { dronesdata } from "../Drones&Cameras/Dronesdata"
import { speakdata } from '../Audio/Speakers/Speakerdata';
import { techdata } from "../WearableTech/Techdata"

import { compdata } from "../Computers/Compdata"
import { mbldata } from "../Mobile/Mobiledata"
import { headdata } from '../Audio/Headphones/Headdata';


function Home() {

  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [imgagebg1, imgagebg2, imgagebg3];
  useEffect(() => {

    const intervel = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000);

    return () => {
      clearInterval(intervel);

    };
  }, [])
  const [showChat, setShowChat] = useState(false);

  const handleWhatsAppClick = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };


  const navigate = useNavigate()

  const gotomobilefeat = (post) => {
    navigate('/headphfeat', { state: { post } })
  }


  const targetId = 'Tech2';
  const targetItem = techdata.find((item) => item.id === targetId);

  const targetId2 = 'C3';
  const targetItem2 = compdata.find((item) => item.id === targetId2);

  const targetId3 = 'D5';
  const targetItem3 = dronesdata.find((item) => item.id === targetId3);

  const targetId4 = 3;
  const targetItem4 = mbldata.find((item) => item.id === targetId4);

  const targetId5 = 'head4';
  const targetItem5 = headdata.find((item) => item.id === targetId5);

  const targetId6 = 'Tech3';
  const targetItem6 = techdata.find((item) => item.id === targetId6);

  const selectedItems = [];
  if (targetItem) {
    selectedItems.push(targetItem);
  }
  if (targetItem2) {
    selectedItems.push(targetItem2);
  }
  if (targetItem3) {
    selectedItems.push(targetItem3);
  }
  if (targetItem4) {
    selectedItems.push(targetItem4);
  }
  if (targetItem5) {
    selectedItems.push(targetItem5);
  }
  if (targetItem6) {
    selectedItems.push(targetItem6);
  }


  const categoryId = 'Tech1';
  const categoryItem = techdata.find((item) => item.id === categoryId);
  const categoryId2 = 4;
  const categoryItem2 = mbldata.find((item) => item.id === categoryId2);
  const categoryId3 = 'C2';
  const categoryItem3 = compdata.find((item) => item.id === categoryId3);
  const categoryId4 = 'S8';
  const categoryItem4 = speakdata.find((item) => item.id === categoryId4);
  const categoryId5 = 'Tech3';
  const categoryItem5 = techdata.find((item) => item.id === categoryId5);
  const categoryId6 = 'D2';
  const categoryItem6 = dronesdata.find((item) => item.id === categoryId6);



  const selectedItemsSale = [];
  if (categoryItem) {
    selectedItemsSale.push(categoryItem);
  }
  if (categoryItem2) {
    selectedItemsSale.push(categoryItem2);
  }
  if (categoryItem3) {
    selectedItemsSale.push(categoryItem3);
  }
  if (categoryItem4) {
    selectedItemsSale.push(categoryItem4);
  }
  if (categoryItem5) {
    selectedItemsSale.push(categoryItem5);
  }
  if (categoryItem6) {
    selectedItemsSale.push(categoryItem6);
  }

  const items = [
    {
      id: 1,
      tittle: `Curb-side`,
      tittle2: `pickup`,
      icon: "fa-solid  h2 fa-truck",

    },
    {
      id: 2,

      tittle: `Free shipping on`,
      tittle2: `orders over $50 `,
      icon: "fa-solid fa-box h2 "
    },
    {
      id: 3,
      tittle: `Low new prices`,
      tittle2: ` guaranteed`,
      icon: "fa-solid fa-hand-holding-dollar h2"
    },
    {
      id: 4,
      tittle: `Available to`,
      tittle2: `you 24/7  `,
      icon: "fa-solid fa-clock-rotate-left h2"
    },

  ];
  const sale = [
    {
      id: 1,
      tittle: `Fitboot Inspire Fitness Tracker With Heart Rate Tracking`,
      image: image1,
      olldPrice: "100",
      newPrice: "70",
      sale: 1,
    },
    {
      id: 2,

      tittle: `JP Gaming Laptop 15.6" Laptop 256GB`,
      image: image2,
      olldPrice: "100",
      newPrice: "70",
      sale: 1,
    },
    {
      id: 3,
      tittle: `HKI Tech Quadcopter Drone With 360 Camera & Controller`,
      image: image3,
      newPrice: "85",
      olldPrice: "110",
      sale: 1,
    },
    {
      id: 4,
      tittle: `Smartphone Z Pixel Max 128GB Unlocked`,
      image: image4,
      newPrice: "70",
      olldPrice: "90",
      sale: 0,

    },
    {
      id: 5,
      tittle: `In-ear Noise Cancelling & Isolating Wireless Earbuds`,
      image: image5,
      newPrice: "70",
      olldPrice: "95",
      sale: 1,

    },
    {
      id: 6,
      tittle: `Safay GEN 2 256GB VR headset With Touch Controllers`,
      image: image6,
      newPrice: "85",
      olldPrice: "120",

    },
  ]


  return (
    <>

      <div className='home-sec ' >
        <div className='container-fluid  main-after-smallScreen mx-0 px-0 g-0' >
          <div className='hero-background ' style={{
            background: `url(${images[currentImageIndex]})`, backgroundSize: "cover",
            transition: 'background 1s ease-in', width: "100%", marginTop: '110px'
          }} >

            <div className="hero-row main-after-smallScreen">
              <div className="col  px-md-4 px-lg-3 px-sm-2 px-0 ">
                <p><span className='span-red py-1 px-3 text-white'>  Best Prices</span></p>
                <h1 className='hero-heading'>Incredible Prices <br /> on All Your <br /> Favorite Items</h1>
                <p className='hero-para'>Get more for less on selected brands</p>
                <div className='pt-2'>
                  <Link to={'/shop'}>
                    <ButtonPurple label="Shop now" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container">
            {!showChat && (
              <div className="whatsapp-icon" onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>
                <span className='messageicon '>
                  <i class="fa-regular fa-comment h2  text-white"></i>
                </span>
              </div>
            )}
            {showChat && <Chatbox handleClose={handleCloseChat} />}
          </div>
          <div className='container-fluid img-container-smallScreen m-0 p-0 '>
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Two Images sale Images */}
        <div className="container-fluid px-5">
          <div className="row pt-5  d-flex justify-content-center ">
            <div className="col-12">
              <div className="row justify-content-between">


                <div className=" col-lg-5  hero-section2  hero-section2red p-5  " >
                  <div className=''>
                    <p className='p-deals'>Holiday Deals</p>
                    <h1 className='h-deals'>Up to <br />  30% off</h1>
                    <p className='p-deals'>Selected Smartphone Brands </p>
                    <Link to={'/mobile'}>
                      <ButtonWhite
                        label="Shop"
                        backgroundColorBeforeHover="white"
                        backgroundColorAfterHover="rgb(193, 46, 36)"
                        textColorAfterHover="white"
                        textColorBeforeHover="black"
                      />
                    </Link>

                  </div>
                </div>
                <div className="col-lg-5  hero-section2purple hero-section2 p-5 " >
                  <div className=''>
                    <p className='p-deals'>Just In</p>
                    <h1 className='h-deals'>Take Your <br /> Sound <br />Anywhere</h1>
                    <p className='p-deals'>Top Headphone Brands</p>
                    <Link to={'/headph'}>
                      <ButtonWhite
                        label="Shop"
                        backgroundColorBeforeHover="white"
                        backgroundColorAfterHover="rgb(85, 45, 151)"
                        textColorAfterHover="white"
                        textColorBeforeHover="black"
                      />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* DELivery SEction */}

        <div className="container-fluid   my-5" style={{ padding: " 10px 2.3rem" }}>
          <div className="row bg-body py-3 ">

            {
              items.map((props, index) => {
                return (

                  <div key={index} className="col-md-6 my-md-4  col-lg-3 align-items-center" >
                    <div className='d-flex ps-0 ps-md-5 justify-content-lg-center justify-content-md-start justify-content-center align-items-center  icon-class2'>

                      <div><span className=' px-4'><i className={props.icon}></i></span></div>
                      <div>
                        <h5 className='deliivery-text'>{props.tittle}</h5>
                        <h5 className='deliivery-©text'>{props.tittle2}</h5>

                      </div>
                    </div>

                  </div>
                )
              })
            }

          </div>
        </div>


        {/* BestSeller Section */}

        <div className="container-fluid" style={{ padding: " 0px 1.8rem" }}>
          <div className="bg-body py-5 my-5">
            <div className="row  align-items-center text-center pb-5">
              <h3 className='reuse-heading'>Best Sellers</h3>
            </div>
            <div className="row justify-content-lg-start justify-content-center px-5">
              {selectedItems.map((post, id) => {
                const saleTag = [0, 1, 2, 4, 5].includes(id)
                const remainTag = [3].includes(id)
                return (
                  <div className="col-xxl-2 col-lg-2 col-md-4 col-sm-3 col-sm-5 border  my-md-3 seller-class py-4
                                        my-sm-0 mx-sm-0 my-1 mx-1  border border-1 overflow-hidden "
                    key={id} onClick={() => gotomobilefeat(post)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                    <div className='ps-3 mbl-main'>
                      <p className='mbl-hd text-container2' style={{ height: "3rem" }}>{post?.title}</p>
                      <div className='d-flex bestSeller-price-div2'>
                        {saleTag && <del>{post?.price}</del>}
                        {saleTag && <p className='ps-2' style={{ color: "rgb(85, 45, 151)", fontSize: "17px" }}>{post?.discprice}</p>}
                      </div>
                      {remainTag && <p>{post?.price}</p>}

                    </div>
                    {saleTag && <div className='bg-danger py-1  px-3 text-white sale-class z-inde'>{post?.Sale}</div>}
                  </div>
                )
              })}

            </div>
            <div className="row align-items-center text-center pt-3">
              <div className='py-2'>
                <Link to={'/shop'}>
                  <ButtonPurple label="View all" />
                </Link>

              </div>
            </div>
          </div>

        </div>

        <Category />
        <BestPrice />
        {/* <OnSale /> */}




        <div className="container-fluid " style={{ padding: " 0px 1.8rem" }}>
          <div className="bg-body py-5 my-5">

            <div className="row  align-items-center text-center pb-5">
              <h3 className='reuse-heading'>On Sale</h3>
            </div>
            <div className="row  justify-content-lg-start justify-content-center px-5">
              {selectedItemsSale.map((post, id) => {
                const saleTag = [0, 1, 2, 3, 4, 5].includes(id)
                // const remainTag = [].includes(id)
                return (
                  <div className="col-xxl-2 col-lg-2 col-sm-3 col-md-4  col-sm-5 border  my-md-3 seller-class py-4
                                        my-sm-0 mx-sm-0 my-1 mx-1  border border-1 overflow-hidden "
                    key={id} onClick={() => gotomobilefeat(post)}
                    style={{ cursor: "pointer" }} >
                    <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                    <div className='ps-3 mbl-main'>
                      <p className='mbl-hd text-container2' style={{ height: "3rem" }} >{post?.title}</p>
                      <div className='d-flex bestSeller-price-div2'>
                        {saleTag && <del>{post?.price}</del>}
                        {saleTag && <p className='ps-2' style={{ color: "rgb(85, 45, 151)", fontSize: "17px" }}>{post?.discprice}</p>}
                      </div>
                      {/* {remainTag && <p>{post?.price}</p>} */}

                    </div>
                    {saleTag && <div className='bg-danger py-1  px-3 text-white sale-class z-inde'>{post?.Sale}</div>}
                  </div>
                )
              })}
            </div>
            <div className="row align-items-center text-center">
              <div className='py-2'>
                <Link to={'/sale'}>
                  <ButtonPurple label="View all" />
                </Link>

              </div>
            </div>
          </div>
        </div>
        <DroneImage />
        <Brands />
        <NewsLetter />
        <HelpCenter />
        <Footer1 />
        <Footer2 />
      </div>
    </>

  );
}

export default Home;

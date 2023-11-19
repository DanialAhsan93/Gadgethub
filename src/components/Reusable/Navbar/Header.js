import React, { useEffect, useState } from 'react';
import './header.css';
import { CiSearch } from 'react-icons/ci';
import { IoPersonCircle } from 'react-icons/io5';
import { BsSuitHeart } from 'react-icons/bs'
import { BsCart2 } from 'react-icons/bs';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import SubHeader from './SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AiTwotoneDelete } from 'react-icons/ai'
import { DLT } from '../../../redux/action/Action';
import { ADD } from '../../../redux/action/Action';
import { RMV } from '../../../redux/action/Action';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import LoginComponet from './SignUp/LogIn'
import SignupComponet from './Login/SignUp'
import ForgetPassword from './Login/ForgetPassword';
import EnterOtp from './Login/EnterOtp';
import NewPassword from './Login/NewPassword';
import { useNavigate } from 'react-router-dom';
// import img4 from "../../Assets/Images/Categorey4.webp"
import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export default function Header({ isOpen, handleClose }) {
  // const [previousRoute, setPreviousRoute] = useState('/');
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate()


  const location = useLocation();
  // const history = useHistory();
  // const previousRoute = useRef(null);




  const handleSearch = () => {
    navigate('/search');
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -10,
      top: 11,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      background: 'black'
    },
  }));

  const [activeForm, setActiveForm] = useState('login'); // 'login' is the default active form

  const handleFormToggle = () => {
    setActiveForm(prevActiveForm => {
      if (prevActiveForm === 'login') {
        return 'signup';
      } else if (prevActiveForm === 'signup') {
        return 'forgetPassword';
      } else if (prevActiveForm === 'forgetPassword') {
        return 'enterOtp';
      } else if (prevActiveForm === 'enterOtp') {
        return 'newPassword';
      } else if (prevActiveForm === 'newPassword') {
        return 'signup';
      }
      else {
        return '';
      }
    });
  };


  // const [isNavbarActive, setNavbarActive] = useState(true);
  // const [scrollY, setScrollY] = useState(0);


  // const handleToggle = () => {
  //   setNavbarActive(!isNavbarActive);
  // };
  // // const handleCross = () => {
  // //   setNavbarActive(false);
  // // };
  // // const [isNavbarActive, setNavbarActive] = useState(true);
  // // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     // Check for screen width greater than or equal to 768px before applying sliding effect
  //     if (scrollY >= window.innerHeight * 0.5) {
  //       setNavbarActive(false); // Slide the Header back up when scrolling past 50vh
  //     } else {
  //       setNavbarActive(true);
  //     }
  //   } else {
  //     // Disable sliding effect on small screens
  //     setNavbarActive(true);
  //   }
  // }, [scrollY]);
  const [isNavbarActive, setNavbarActive] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    // navigate('/mblfeat')
    setActiveForm('login');
    setShowLogin(true);
  };
  const handleLoginClick2 = () => {
    // navigate('/search')
    // setActiveForm('login');
    // setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleFormSubmit = () => {
    setShowLogin(false);
  };
  const [scrollY, setScrollY] = useState(0);

  const handleToggle = () => {
    setNavbarActive(!isNavbarActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > scrollY ? 'down' : 'up';
      setScrollY(currentScrollY);

      if (window.innerWidth >= 320) {
        if (scrollDirection === 'down' && currentScrollY >= window.innerHeight * 0.5) {
          setNavbarActive(false);
        } else {
          setNavbarActive(true);
        }
      } else {
        setNavbarActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const headerStyle = {
    position: 'fixed',
    top: isNavbarActive ? '0' : '-130px',
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundColor: 'white',
    transition: 'top 0.3s ease-in-out',
  };

  const getdata = useSelector((state) => state.cartReducer.cart);
  // const totalprice = useSelector((state) => state.cartReducer.totalprice);



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


  // console.log(getdata);
  // const [price, setprice] = useState(0);

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

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleOffCanvasToggle = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  // const handleSearchInputChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  // const handleSearchInputChange = (e) => {
  //   const input = e.target.value;
  //   setSearchInput(input);
  //   if (input.trim() !== '') {
  //     navigate(`/search?query=${encodeURIComponent(input)}`);
  //   }
  //   // navigate(`/search?query=${encodeURIComponent(input)}`);
  // };

  const handleSearchInputChange = (e) => {

    // previousRoute.current = location.pathname;

    const input = e.target.value;
    setSearchInput(input);
    if (input.trim() === ''
      // && previousRoute.current && previousRoute.current !== '/search'
      // history.push(previousRoute.current);
    ) {
      // if(location.pathname === "/search"){
      //   navigate("/");
      // }
      // navigate(previousRoute);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== '') {
      // setPreviousRoute(location.pathname);
      // previousRoute.current = location.pathname;
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    }

  };




  return (
    <>
      <section className={`nav-sect ${isNavbarActive ? 'fixed-header' : ''}`} style={headerStyle}>
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-sm-7">
              <div className="d-sm-flex d-none justify-content-between align-items-center">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <span className='nav-logo'>
                    Gadget Hub
                  </span>
                </Link>
                <form action="" onSubmit={handleSubmit} >
                  <div className='d-flex justify-content-center align-items-center ms-sm-3' style={{ width: '100%' }} >

                    <input type="text" placeholder='Search...' className='Nav-search'
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />
                    {/* <Link to={`/search?query=${encodeURIComponent(searchInput)}`}>Search</Link> */}
                    <button type='submit' className=' nav-icon'>
                      <span className='d-flex py-md-2 px-md-4 py-sm-1 px-sm-3 '>
                        <CiSearch className='nav-ser my-1' style={{ color: '#fff', fontSize: '18px' }} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>


              <div className='d-block d-sm-none d-flex align-items-center'>
                <div className="row justify-content-between align-items-center">
                  <div className="col-5">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>

                      <span className='nav-logo'>Gadget Hub</span>
                    </Link>

                  </div>
                  <div className="col-4 ps-5 d-flex justify-content-end d-sm-none small-cart"


                  >
                    <button className="btn me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                      <StyledBadge badgeContent={getdata.length} color="secondary">
                        <BsCart2 className='cart-icon' />

                      </StyledBadge>

                    </button>


                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1"
                      id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                      <div className="py-4 bg-dark">
                        <div className="row justify-content-between">
                          <div className="col-5 ps-4">
                            <button type="button" className="bg-transparent border-0 fs-4" data-bs-dismiss="offcanvas" aria-label="Close">
                              <span className='text-light'>
                                <IoIosArrowBack />
                              </span>
                            </button>

                          </div>
                          <div className="col-7 ps-2">

                            <h5 className="offcanvas-title text-start ps-sm-5 text-light"
                              id="offcanvasWithBothOptionsLabel">
                              Cart
                            </h5>
                          </div>
                        </div>


                      </div>
                      <div className="offcanvas-body"

                      // style={{
                      //   backgroundImage: getdata.length === 0 ? "url('../../Assets/Images/Categorey4.webp')" : "",
                      //   backgroundRepeat: 'no-repeat',
                      //   backgroundSize: 'cover',
                      //   backgroundPosition: 'center',
                      // }}

                      >
                        {
                          getdata.length ?

                            <div className="card_details">
                              <div style={{ cursor: 'pointer' }} >
                                {
                                  getdata.map((post, id) => {
                                    return (
                                      <>
                                        <div className="container-fluid px-3">
                                          <div className="row">

                                            <div className='col-5 p-2'>
                                              <NavLink to={`/cart/${post.id}`} >
                                                {/* <onClick={handleClose}> */}
                                                <div>

                                                  <img src={post?.thumbnail} alt="#" className='img-fluid cart-img' />

                                                </div>

                                              </NavLink>
                                            </div>

                                            <div className='col-5 p-2 text-start cart-card-right'>
                                              <p>{post.title}</p>
                                              <p> {post?.price}</p>
                                              <div className='d-flex align-items-center'>
                                                <span className='pe-3' onClick={() => dlt(post.id)}>-</span>
                                                <p className='mb-0'> {post?.quantity}</p>
                                                <span className='ps-3' onClick={() => send(post)}>+</span>

                                              </div>
                                              <p className='cart-close'>
                                                <AiOutlineCloseCircle style={{ fontSize: '16px', cursor: 'pointer' }}
                                                  onClick={() => handleRemoveItem(post.id)} />
                                              </p>
                                            </div>



                                          </div>
                                          <hr />

                                        </div>

                                      </>
                                    )

                                  })
                                }
                              </div>

                            </div>
                            :
                            <div className="card_details" style={{ cursor: 'pointer' }} >
                              {/* <div className="d-flex justify-content-end">
                      <GrFormClose style={{ fontSize: '25px', paddingRight: '10px' }} onClick={handleClose} />
                    </div> */}
                              <p style={{ padding: '5px 20px' }}>Cart is empty</p>
                            </div>
                        }
                      </div>

                      {getdata.length ?
                        <div


                        >
                          <div className="d-flex justify-content-start ps-5">
                            <div>
                              <p style={{ fontSize: '16px' }}>SubTotal</p>
                              <p className='pb-1 text-start' style={{ fontSize: '16px' }}> ${subtotal}</p>
                            </div>

                          </div>
                          <div className='text-center'>
                            <Link to={'/cart'}>
                              <button className='btn-cart' style={{ background: 'var(--bs-primary)' }}>
                                View Cart
                              </button>
                            </Link>

                          </div>
                        </div>
                        : null

                      }
                    </div>


                  </div>



                  <div className="col-1 d-flex d-sm-none justify-content-end">
                    <button class="btn border-0 " type="button" data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                      <div className='toggle-button' style={{ cursor: 'pointer' }}>
                        <div className="toggle-button ">
                          <span className="bar"></span>
                          <span className="bar"></span>
                          <span className="bar"></span>
                        </div>
                      </div>
                    </button>

                    <div class="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                      <div class="offcanvas-header">

                        <Link to={"/login"}
                          class="offcanvas-title m-0 ms-sm-3"
                          id="offcanvasTopLabel"
                          onClick={handleLoginClick}
                          style={{ cursor: "pointer", fontSize: '18px', color: "black", textDecoration: "none" }}
                        >

                          <span className='me-3' data-bs-dismiss="offcanvas" >
                            Login
                            <IoPersonCircle style={{ fontSize: '28px' }} />
                          </span>
                        </Link>

                        <div>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                          </button>
                        </div>



                      </div>
                      <div class="offcanvas-body p-0">
                        <div className='side-bar'>
                          <ul className='p-0'>
                            <li className='small-login'>
                              <div className="d-flex justify-content-center py-3" data-bs-dismiss="offcanvas">
                                <BsSuitHeart style={{ fontSize: '22px' }} />
                                <Link to={'/Favour'} style={{ textDecoration: 'none', color:"black" }} >
                                <p className='m-0 ms-3 ' >
                                  Favoraties
                                </p>
                                </Link>
                              </div>
                            </li>
                            <section className="subheader d-sm-none d-flex justify-content-center">
                              <ul className='ps-0 mb-0 text-center subheader-menu '>
                                <li className='submenu-list  '>
                                  <Link to={'/shop'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Shop All</span>
                                  </Link>
                                </li>
                                <li className='submenu-list  '>
                                  <Link to={'/comp'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Computers</span>
                                  </Link>
                                </li>
                                <li className='submenu-list  '>
                                  <Link to={'/tab'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Tablets</span>
                                  </Link>
                                </li><li className='submenu-list  '>
                                  <Link to={'/drones'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Drones & Cameras</span>
                                  </Link>
                                </li><li className='submenu-list  '>
                                  <Link to={'/'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Audio</span>
                                  </Link>
                                </li><li className='submenu-list  '>
                                  <Link to={'/mobile'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Mobile</span>
                                  </Link>
                                </li><li className='submenu-list  '>
                                  <Link to={'/tv'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">TV & Home Cinema</span>
                                  </Link>
                                </li><li className='submenu-list  '>
                                  <Link to={'/tech'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Wearable Tech</span>
                                  </Link>
                                </li><li className='submenu-list  '>
                                  <Link to={'/sale'} style={{ textDecoration: 'none' }} >
                                    <span className='subheader-link ' data-bs-dismiss="offcanvas">Sale</span>
                                  </Link>
                                </li>

                              </ul>
                            </section>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="col mt-sm-0 mt-4">
                    <div className='d-flex justify-content-center align-items-center ms-sm-3' style={{ width: '100%' }} >
                      <form action="" onSubmit={handleSubmit} >

                        <input type="text" placeholder='Search...' className='Nav-search '
                          value={searchInput}
                          onChange={handleSearchInputChange} />


                        <button type="submit" className=' nav-icon'>
                          {/* <span className='d-flex align-items-center ' style={{    padding: "3px 20px 17px 3px"}}> */}
                          <CiSearch className='nav-ser ' style={{ color: '#fff', fontSize: '18px', margin: "12px 12px" }} />
                          {/* </span> */}
                        </button>
                      </form>


                    </div>

                  </div>



                </div>



              </div>


            </div>

            <div className="col-lg-4 col-sm-5 px-0 ">
              <div className="row justify-content-lg-end justify-content-sm-end align-items-end">
                <div className="col-lg-3 col-sm-4 d-sm-flex d-none">




                  {/* <div>
                    {showLogin && (
                      <div
                        style={{
                          position: 'fixed',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100vh',
                          background: 'rgba(0, 0, 0, 0.6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 999,
                        }}
                      >
                        {
                          activeForm === 'login' ? (
                            <LoginComponet onClose={handleLoginClose} onFormToggle={handleFormToggle} onSubmit={handleFormSubmit} />
                          ) : activeForm === 'signup' ? (
                            <SignupComponet onClose={handleLoginClose} onSubmit={handleFormSubmit} onFormToggle={handleFormToggle} />
                          ) : activeForm === 'forgetPassword' ? (
                            <ForgetPassword onClose={handleLoginClose} onSubmit={handleFormSubmit} onFormToggle={handleFormToggle} />
                          ) : activeForm === 'enterOtp' ? (
                            <EnterOtp onClose={handleLoginClose} onSubmit={handleFormSubmit} onFormToggle={handleFormToggle} />
                          ) : activeForm === 'newPassword' ? (
                            <NewPassword onClose={handleLoginClose} onSubmit={handleFormSubmit} onFormToggle={handleFormToggle} />

                          ) : activeForm === ''(
                            <NewPassword onClose={handleLoginClose} onSubmit={handleFormSubmit} onFormToggle={handleFormToggle} />
                          )
                        }
                      </div>
                    )}
                  </div> */}
                  <Link
                    style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
                    className="d-flex justify-content-end align-items-center"
                    //  onClick={handleLoginClick}
                    to={"/login"}
                  >
                    <IoPersonCircle style={{ fontSize: '28px' }} className="login-icon"/>
                    <p className="m-0 ms-sm-2" style={{ fontSize: '14px' }}>
                      Login
                    </p>

                  </Link>


                </div>
                <div className="col-sm-3 me-lg-0 me-sm-3 text-end d-sm-flex d-none" style={{ cursor: "pointer" }}>
                  <Link to={'/favour'} className="d-flex justify-content-end align-items-center text-black" style={{ textDecoration: 'none' }}>
                    <div className='me-sm-1'>
                      <BsSuitHeart style={{ fontSize: '22px' }} className="fvr-icon" />
                    </div>
                    <p className='m-0  ms-sm-2 ' style={{ fontSize: '14px' }}>
                      <span style={{ textDecoration: 'none', color: 'var(--bs-sec)' }} className="fvricon-txt">
                        Favoraties
                      </span>

                    </p>
                  </Link>
                </div>
                {/* <div className="col-sm-3 me-lg-0 me-sm-3 text-end d-sm-flex d-none" style={{ cursor: "pointer" }}>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className='me-sm-1'>
                      <BsSuitHeart style={{ fontSize: '22px' }} />
                    </div>
                    <p className='m-0  ms-sm-2' style={{ fontSize: '14px' }}>
                      <Link to={'/favour'} style={{ textDecoration: 'none', color: 'var(--bs-sec)' }}>
                        Favoraties
                      </Link>

                    </p>
                  </div>
                </div> */}

                <div className="col-sm-2 text-center d-sm-flex justify-content-center d-none">
                  <button className="btn py-md-1 py-sm-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLarge" aria-controls="offcanvasLarge">
                    <StyledBadge badgeContent={getdata.reduce((total, item) => total + item.quantity, 0)} color="secondary">
                      <BsCart2 className='cart-icon' />
                    </StyledBadge>
                    {/* <Badge badgeContent={4} color="primary">

                    </Badge> */}
                  </button>

                  <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1"
                    id="offcanvasLarge" aria-labelledby="offcanvasLargeLabel"  >
                    <div className="py-sm-4 bg-dark" style={{ zIndex: 6 }}>
                      <div className="row justify-content-between">
                        <div className="col-sm-3">
                          <button type="button" className="bg-transparent border-0 fs-4" data-bs-dismiss="offcanvas"
                            aria-label="Close">
                            <span className='text-light'><IoIosArrowBack /></span>
                          </button>

                        </div>
                        <div className="col-sm-8">

                          <h5 className="offcanvas-title text-start ps-sm-5 text-light"
                            id="offcanvasWithBothOptionsLabel">
                            Cart
                          </h5>
                        </div>
                      </div>


                    </div>
                    <div className="offcanvas-body">
                      {
                        getdata.length ?

                          <div className="card_details">
                            <div style={{ cursor: 'pointer' }} >
                              {
                                getdata.map((post) => {
                                  return (
                                    <>
                                      <div className="container-fluid px-3">
                                        <div className="row cart-row">

                                          <div className='col-5 p-2'>
                                            <NavLink to={`/cart/${post.id}`} >
                                              {/* <onClick={handleClose}> */}
                                              <div>

                                                <img src={post?.thumbnail} alt="#" className='img-fluid cart-img' />

                                              </div>

                                            </NavLink>
                                          </div>

                                          <div className='col-5 p-2 text-start cart-card-right'>
                                            <p>{post.title}</p>
                                            <p style={{ color: "blue" }}> {post?.price}</p>
                                            <div className='d-flex align-items-center'>
                                              <span className='pe-3' onClick={() => dlt(post.id)}>-</span>
                                              <p className='mb-0'> {post?.quantity}</p>
                                              <span className='ps-3' onClick={() => send(post)}>+</span>

                                            </div>
                                            <p className='cart-close'>
                                              <AiOutlineCloseCircle style={{ fontSize: '16px', cursor: 'pointer' }}
                                                onClick={() => handleRemoveItem(post.id)} />
                                            </p>

                                          </div>



                                        </div>
                                        <hr />

                                      </div>

                                    </>
                                  )

                                })
                              }
                            </div>

                          </div>
                          :
                          <div className="card_details" style={{ cursor: 'pointer' }} >
                            <p style={{ padding: '5px 20px' }}>Cart is empty</p>
                          </div>
                      }
                    </div>
                    {getdata.length ?
                      <div className='py-3'>
                        <div className="d-flex justify-content-start ps-5">
                          <div>
                            <p style={{ fontSize: '25px' }}>SubTotal</p>
                            <p className='pb-3 text-start' style={{ fontSize: '25px' }}> ${subtotal}</p>
                          </div>

                        </div>
                        <Link to={'/cart'}>
                          <button className='btn-cart' style={{ background: 'var(--bs-primary)' }}
                            data-bs-dismiss="offcanvas"
                          >
                            View Cart
                          </button>
                        </Link>


                      </div>
                      :
                      null}
                  </div>



                </div>


              </div>

            </div>

          </div>

        </div>
      </section>

      <SubHeader />

    </>
  )
}

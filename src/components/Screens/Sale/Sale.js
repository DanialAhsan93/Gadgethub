import React from 'react';
import '../Computers/comp.css';
import HelpCenter from '../Home/HelpCenter';
import Footer1 from '../Home/Footer1';
import Footer2 from '../Home/Footer2';
import { useNavigate } from 'react-router-dom';
import Salesaccord from '../../Reusable/Salesaccordion/Salesaccord';
import Smallsalesaccord from '../../Reusable/Smallsalesaccord/Smallsalesaccord';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import Smalloffcanvas from '../../Reusable/Smalloffcanvas/Smalloffcanvas';
import Largeoffcanvas from '../../Reusable/Largeoffcanvas/Largeoffcanvas';
import { setNewestfilter } from '../../../redux/action/Action';
import { techdata } from '../WearableTech/Techdata';
import { mbldata } from '../Mobile/Mobiledata';
import { tvdata } from '../TV&HomeCinema/Tvdata';
import { tabdata } from '../Tablets/Tabletdata';
import { dronesdata } from '../Drones&Cameras/Dronesdata';


export default function Sale() {
    const navigate = useNavigate()
    const AllData = [...dronesdata, ...techdata, ...mbldata, ...tvdata]

    // const gotomobilefeat = (post) => {
    //     navigate('/mblfeat', { state: { post } })
    // }
    // const gototechfeat = (post) => {
    //     navigate('/techfeat', { state: { post } })
    // }
    // const gototvfeat = (post) => {
    //     navigate('/tvfeat', { state: { post } })
    // }
    // const gotodronefeat = (post) => {
    //     navigate('/dronesfeat', { state: { post } })
    // }


    const navigateToFeaturePage = (post) => {
        const { Type } = post;
        switch (Type) {
            case 'Mobile':
                navigate('/mblfeat', { state: { post } });
                break;
            // case 'Tablet':
            //     navigate('/tabfeat', { state: { post } });
            //     break;
            case 'Tv':
                navigate('/tvfeat', { state: { post } });
                break;
            case 'wearable':
                navigate('/techfeat', { state: { post } });
                break;
            case 'Drone':
                navigate('/dronesfeat', { state: { post } });
                break;
            default:
                break;
        }
    };




    // // Drones Data
    // const dataOfDrones = dronesdata;
    // const selectedDronesIds = ['D4', 'D3', 'D7', 'D6'];
    // const selectedDronesData = dataOfDrones
    // .filter((item) => selectedDronesIds.includes(item.id))
    // .map((item, index) => ({ ...item, id: 10 + index + 1 }));  // Now 'selectedDronesData' contains the selected items with new numeric IDs (e.g., 1001, 1002, etc.)

    // // Mobile Data
    // const mobileDataApi = mbldata
    // const selectedMobileData = mobileDataApi.filter((item) => [3, 4, 5, 7].includes(item.id));

    // // Tv Data
    // const dataOFTV = tvdata
    //   const selectedTVIds =  ['TV3', 'TV4', 'TV6', 'TV7'];;
    //   const selectedTVData = dataOFTV
    //     .filter((item) => selectedTVIds.includes(item.id))
    //     .map((item, index) => ({ ...item, id: 20 + index + 1 }));  // Now 'selectedDronesData' contains the selected items with new numeric IDs (e.g., 1001, 1002, etc.)

    //     // Tech Data   
    // const dataOFTech = techdata
    //   const selectedTechIds =  ['Tech4', 'Tech3', 'Tech7', 'Tech6'];
    //   const selectedTechData = dataOFTech
    //     .filter((item) => selectedTechIds.includes(item.id))
    //     .map((item, index) => ({ ...item, id: 30 + index + 1 }));  // Now 'selectedDronesData' contains the selected items with new numeric IDs (e.g., 1001, 1002, etc.)


    // // Combbining the arrays
    // const comimedData = [...selectedDronesData ,...selectedMobileData ,...selectedTVData ,...selectedTechData   ];

    // Now Filtering Data   using redux
    const dispatch = useDispatch()


    const filterCriteria = useSelector((state) => state.filterReducer.filterCriteria);
    const sortOption = useSelector((state) => state.filterReducer.sortOption);


    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        dispatch(setNewestfilter(selectedOption));
    }



    const filterFunction = (data) => {

        // const idstoshow = [3, 4, 6, 7];
        // const showAll = [1, 2, 3, 4, 5, 6, 7, 8 ,9,10,11,12,13,14,15,16];

        // const filterAll = (post) => idstoshow.includes(post.id) || showAll.includes(post.id);
        // const filterDrones = (post) => [ 11,12,13,14 ].includes(post.id);
        // const filterMobile = (post) => [3,4, 5,7 ].includes(post.id);
        // const filterTv = (post) => [20,21,22, 23,24 ].includes(post.id);
        // const filterTechData = (post) => [31,32,33,34].includes(post.id);



        const filterAll = (post) => true;
        const filterDrones = (post) => post.Type === "Drone" && post.Sale2 === "Sale";
        const filterMobile = (post) => post.Type === "Mobile" && post.Sale2 === "Sale";
        const filterTv = (post) => post.Type === "Tv" && post.Sale2 === "Sale";
        const filterTechData = (post) => post.Type === "wearable" && post.Sale2 === "Sale";
        //  const filterTabletData = (post) => post.Type === "Tablet";

        if (!filterCriteria || filterCriteria.category === 'ALL') {
            // console.log("All");
            return data; // Return the original data when 'ALL' category is selected or no filter criteria present
        }


        else if (!filterCriteria || filterCriteria.category === 'Drones') {
            // console.log("drone");
            return data.filter(filterDrones);

        }
        else if (filterCriteria.category === 'Tv') {
            // console.log("TV");
            return data.filter(filterTv);

        }
        else if (filterCriteria.category === 'Tech') {
            console.log("TEch");
            return data.filter(filterTechData);

        }
        else if (filterCriteria.category === 'Mobile') {
            console.log("Mobile");
            return data.filter(filterMobile);

        }

        return data.filter(filterAll);

    }




    // Function to sort the data based on the selected option
    const sortMbldata = (data, option) => {
        const discpriceIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // IDs of items with discprice
        const regularIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // IDs of regular items

        const getPrice = (item) => {
            return item.discprice ? parseFloat(item.discprice.slice(1)) : parseFloat(item.price.slice(1));
        };

        const newData = [...data];

        if (option === 'newest') {
            newData.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (option === 'nameAZ') {
            newData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === 'nameZA') {
            newData.sort((a, b) => b.title.localeCompare(a.title));
        } else if (option === 'priceLowToHigh') {
            newData.sort((a, b) => {
                const aPrice = getPrice(a);
                const bPrice = getPrice(b);

                if (discpriceIds.includes(a.id) && discpriceIds.includes(b.id)) {
                    return aPrice - bPrice; // Both items have discprice, sort by price
                } else if (discpriceIds.includes(a.id)) {
                    return -1; // a has discprice, show it first
                } else if (discpriceIds.includes(b.id)) {
                    return 1; // b has discprice, show it first
                } else {
                    return aPrice - bPrice; // Both items are regular, sort by price
                }
            });
        } else if (option === 'priceHighToLow') {
            newData.sort((a, b) => {
                const aPrice = getPrice(a);
                const bPrice = getPrice(b);

                if (regularIds.includes(a.id) && regularIds.includes(b.id)) {
                    return bPrice - aPrice; // Both items are regular, sort by price in reverse order
                } else if (regularIds.includes(a.id)) {
                    return -1; // a is regular, show it first
                } else if (regularIds.includes(b.id)) {
                    return 1; // b is regular, show it first
                } else {
                    return bPrice - aPrice; // Both items have discprice, sort by price in reverse order
                }
            });
        }

        return newData;
    };

    const filteredAndSortedData = sortMbldata(filterFunction(AllData), sortOption);

    return (
        <>
            <section className='mbl-sect'>
                <div className="container-fluid py-sm-5">
                    <h1 className='mbl-head text-center pt-sm-2'>Sale</h1>
                    <div className="row pt-sm-5 mt-sm-4 mt-5 ps-sm-2 justify-content-sm-between justify-content-center">
                        <div className="col-sm-3 filter-sep">
                            <span className='filter-mbl d-sm-flex d-none'>
                                Filter by
                            </span>
                            <div>

                                <Smallsalesaccord />
                            </div>
                            <div className='underline'></div>
                        </div>

                        <div className="col-sm-2 d-sm-flex d-none border border-1 py-sm-2 me-sm-1" style={{ width: '12rem' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <select name="sort by" id="Sort" onChange={handleSortChange} value={sortOption}>
                                        <option value="newest">Newest</option>
                                        <option value="priceLowToHigh">Price (Low to High)</option>
                                        <option value="priceHighToLow">Price (High to Low)</option>
                                        <option value="nameAZ">Name A-Z</option>
                                        <option value="nameZA">Name Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-sm-none border border-1 py-sm-2 me-sm-1 custom-select-container">
                            <select name="sort by" id="Sort" className="custom-select" onChange={handleSortChange} value={sortOption}>
                                <option value="#"></option>
                                <option value="newest">Newest</option>
                                <option value="priceLowToHigh">Price (Low to High)</option>
                                <option value="priceHighToLow">Price (High to Low)</option>
                                <option value="nameAZ">Name A-Z</option>
                                <option value="nameZA">Name Z-A</option>
                            </select>
                            <div className="custom-select-icon">
                                <CgArrowsExchangeAltV style={{ fontSize: '35px', color: 'var(--bs-sec)' }} />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between mt-sm-3">

                        <Salesaccord />




                        <div className="col-sm-10 my-sm-0 my-5">
                            <div className="row px-sm-3 justify-content-sm-start justify-content-center">


                                {
                                    filteredAndSortedData.map((post, id) => {
                                        // const saleTag = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].includes(id);
                                        const isOnSale = post?.Sale === "Sale";
                                        return (
                                            <div
                                                className="col-xxl-2 col-sm-4 mbl-products col-5 mbl-map px-0 my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden position-relative"
                                                key={id}
                                                onClick={() => navigateToFeaturePage(post)}
                                            >
                                                <div className='overflow-hidden'>

                                                    <img src={post?.thumbnail} alt="#" className="img-fluid mbl-img " />
                                                </div>
                                                <div className="ps-3 pt-4 ">
                                                    <p className="mbl-hd">{post?.title}</p>
                                                    {isOnSale ? ( // Check if the product is on sale
                                                        <>

                                                            <div className="d-flex">
                                                                <del style={{ color: "blue" }}>{post?.price}</del>
                                                                <p className="ps-2" style={{ color: "blue" }}>{post?.discprice}</p>
                                                            </div>
                                                            <div className="mbl-saletag text-center" >{post?.Sale}</div>

                                                        </>
                                                    ) : (
                                                        <p style={{ color: "blue" }}>{post?.price}</p>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })
                                }



                                {/* 
                                {dataOfDrones.map((post, id) => {
                                    const saleTag = [2, 3, 5, 6].includes(id);
                                    const remainTag = [0, 1, 4, 7].includes(id);
                                    if (specificIds.includes(id)) {
                                        return (
                                            <div className="col-xxl-2 col-sm-4 mbl-products col-5 mbl-map px-0
                                            my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden " key={id} onClick={() => gotodronefeat(post)}>
                                                <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                                                <div className='ps-3 mbl-main'>
                                                    <p className='mbl-hd'>{post?.title}</p>
                                                    <div className='d-flex'>
                                                        {saleTag && <del>{post?.price}</del>}
                                                        {saleTag && <p className='ps-2'>{post?.discprice}</p>}
                                                    </div>
                                                    {remainTag && <p>{post?.price}</p>}
                                                </div>
                                                {saleTag && <div className='mbl-saletag text-center'>{post?.Sale}</div>}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                             */}

                                {/* 
                               
                                {dataset2.map((post, id) => {
                                    const saleTag = [2, 3, 5, 6].includes(id);
                                    const remainTag = [0, 1, 4, 7].includes(id);
                                    if (specificIds.includes(id)) {
                                        return (
                                            <div className="col-xxl-2 col-sm-4 mbl-products col-5 mbl-map px-0
                                            my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden " key={id} onClick={() => gototechfeat(post)}>
                                                <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                                                <div className='ps-3 mbl-main'>
                                                    <p className='mbl-hd'>{post?.title}</p>
                                                    <div className='d-flex'>
                                                        {saleTag && <del>{post?.price}</del>}
                                                        {saleTag && <p className='ps-2'>{post?.discprice}</p>}
                                                    </div>
                                                    {remainTag && <p>{post?.price}</p>}
                                                </div>
                                                {saleTag && <div className='mbl-saletag text-center'>{post?.Sale}</div>}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                                {dataset3.map((post, id) => {
                                    const saleTag = [2, 3, 5, 6].includes(id);
                                    const remainTag = [0, 1, 4, 7].includes(id);
                                    if (specificIds.includes(id)) {
                                        return (
                                            <div className="col-xxl-2 col-sm-4 mbl-products col-5 mbl-map px-0
                                            my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden " key={id} onClick={() => gotomobilefeat(post)}>
                                                <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                                                <div className='ps-3 mbl-main'>
                                                    <p className='mbl-hd'>{post?.title}</p>
                                                    <div className='d-flex'>
                                                        {saleTag && <del>{post?.price}</del>}
                                                        {saleTag && <p className='ps-2'>{post?.discprice}</p>}
                                                    </div>
                                                    {remainTag && <p>{post?.price}</p>}
                                                </div>
                                                {saleTag && <div className='mbl-saletag text-center'>{post?.Sale}</div>}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                                {dataset4.map((post, id) => {
                                    const saleTag = [2, 3, 5, 6].includes(id);
                                    const remainTag = [0, 1, 4, 7].includes(id);
                                    if (specificIds.includes(id)) {
                                        return (
                                            <div className="col-xxl-2 col-sm-4 mbl-products col-5 mbl-map px-0
                                            my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden " key={id} onClick={() => gototvfeat(post)}>
                                                <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                                                <div className='ps-3 mbl-main'>
                                                    <p className='mbl-hd'>{post?.title}</p>
                                                    <div className='d-flex'>
                                                        {saleTag && <del>{post?.price}</del>}
                                                        {saleTag && <p className='ps-2'>{post?.discprice}</p>}
                                                    </div>
                                                    {remainTag && <p>{post?.price}</p>}
                                                </div>
                                                {saleTag && <div className='mbl-saletag text-center'>{post?.Sale}</div>}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                               */}

                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <HelpCenter />
            <Footer1 />
            <Footer2 />

        </>
    )
}

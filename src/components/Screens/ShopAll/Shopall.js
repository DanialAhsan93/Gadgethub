import React from 'react';
import '../Computers/comp.css';
import HelpCenter from '../Home/HelpCenter';
import Footer1 from '../Home/Footer1';
import Footer2 from '../Home/Footer2';
import { useNavigate } from 'react-router-dom';
// import Salesaccord from '../../Reusable/Salesaccordion/Salesaccord';
import Smallsalesaccord from '../../Reusable/Smallsalesaccord/Smallsalesaccord';
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { techdata } from '../WearableTech/Techdata';
import { mbldata } from '../Mobile/Mobiledata';
import { tvdata } from '../TV&HomeCinema/Tvdata';
import { tabdata } from '../Tablets/Tabletdata';
import { dronesdata } from '../Drones&Cameras/Dronesdata';
import { useDispatch, useSelector } from 'react-redux';
import { setNewestfilter } from '../../../redux/action/Action';
import ShopLargeAccord from "../../Reusable/ShopLargeAccordion/ShopLargeAccord"
// import Largeoffcanvas from '../../Reusable/Largeoffcanvas/Largeoffcanvas';
// import img1 from "../../Assets/Images/BestPrice.png"

export default function Shopall() {
    const navigate = useNavigate()
    const AllData = [...dronesdata, ...techdata, ...mbldata, ...tvdata, ...tabdata]

    const navigateToFeaturePage = (post) => {
        const { Type } = post;
        switch (Type) {
            case 'Mobile':
                navigate('/mblfeat', { state: { post } });
                break;
            case 'Tablet':
                navigate('/tabfeat', { state: { post } });
                break;
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


    // Now Filtering Data   using redux
    const dispatch = useDispatch()


    const filterCriteria = useSelector((state) => state.filterReducer.filterCriteria);
   
   
   
   
   
   
    const sortOption = useSelector((state) => state.filterReducer.sortOption);


    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        dispatch(setNewestfilter(selectedOption));
    }



    const filterFunction = (data) => {

        const filterAll = (post) => true;
        const filterDrones = (post) => post.Type === "Drone";
        const filterMobile = (post) => post.Type === "Mobile";
        const filterTv = (post) => post.Type === "Tv";
        const filterTechData = (post) => post.Type === "wearable";
        const filterTabletData = (post) => post.Type === "Tablet";

        if (!filterCriteria || filterCriteria.category === 'ALL') {
            //  console.log("All");
            return data;
            // Return the original data when 'ALL' category is selected or no filter criteria present
        }


        else if (filterCriteria.category === 'Drones') {
            //  console.log("drone");
            return data.filter(filterDrones);

        }
        else if (filterCriteria.category === 'Tv') {
            //  console.log("TV");/
            return data.filter(filterTv);

        }
        else if (filterCriteria.category === 'Tech') {
            //  console.log("TEch");
            return data.filter(filterTechData);

        }
        else if (filterCriteria.category === 'Mobile') {
            //  console.log("Mobile");
            return data.filter(filterMobile);

        }
        else if (filterCriteria.category === 'Tablet') {
            //  console.log("Mobile");
            return data.filter(filterTabletData);

        }

        return data.filter(filterAll);

    }


    // Function to sort the data based on the selected option
    const sortMbldata = (data, option) => {
        for (const item of AllData) {
            const itemId = item.id;
            // console.log(itemId); // Do whatever you want with the id here (e.g., store it, display it, etc.)
            const discpriceIds = itemId; // IDs of items with discprice
            const regularIds = itemId; // IDs of regular items 

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
        }
    };

    const filteredAndSortedData = sortMbldata(filterFunction(AllData), sortOption);

    return (
        <>
            <section className='mbl-sect'>
                <div className="container-fluid py-sm-5">
                    <h1 className='mbl-head text-center pt-sm-2'>Shop all</h1>
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

                        <div className="col-sm-2 d-sm-flex d-none border border-1 py-sm-2 me-sm-1" style={{ width: "11rem" }}>
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
                        <div className="col-2 d-sm-none border border-1 py-sm-2 me-sm-1 custom-select-container"

                        >
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

                        <ShopLargeAccord />

                        <div className="col-sm-10 my-sm-0 my-5">
                            <div className="row px-sm-3 justify-content-sm-start justify-content-center">
                                {filteredAndSortedData.map((post, id) => {
                                    const isOnSale = post?.Sale2 === "Sale"; // Check if "Sale" property is equal to "sale"
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

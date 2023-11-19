import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './mobile.css'
import Smalloffcanvas from '../../Reusable/Smalloffcanvas/Smalloffcanvas';
import Largeoffcanvas from '../../Reusable/Largeoffcanvas/Largeoffcanvas';
import { mbldata } from './Mobiledata'
import HelpCenter from '../Home/HelpCenter';
import Footer1 from '../Home/Footer1';
import Footer2 from '../Home/Footer2';
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux';
import { setNewestfilter } from '../../../redux/action/Action';

export default function Mobile() {

    const navigate = useNavigate()

    const gotomobilefeat = (post) => {
        navigate('/mblfeat', { state: { post } })
    }




    //this is an example of filter given by coffee shop website not used in this website

    // const filteredItems = data.filter((item) => {
    //     const name1 = item.name.toLowerCase();
    //     const text1 = item.text.toLowerCase();
    //     const search1 = search.toLowerCase();
    //     const price = item.price;

    //     return (

    //       (name1.includes(search1) || text1.includes(search1))&&
    //       price >= values[0] &&
    //       price <= values[1]
    //     )
    //     })



    // this is another way of writing category filter

    // const filterCriteria = useSelector((state) => state.filterReducer.filterCriteria);
    // const idstoshow = [3,4,6,7]
    // const showAll =[1,2,3,4,5,6,7,8]


    // const filterAll = (post) => idstoshow.includes(post.id) || showAll.includes(post.id);
    // const filterSale = (post) => [3, 4, 6, 7].includes(post.id);
    // const filterBestSeller = (post) => [1, 2, 5, 8].includes(post.id);



    // const filterFunction = () => {
    //     if (!filterCriteria) {
    //         return filterAll;
    //     } else if (filterCriteria.category === 'ALL') {
    //         return filterAll;
    //     } else if (filterCriteria.category === 'Sale') {
    //         return filterSale;
    //     } else if (filterCriteria.category === 'best seller') {
    //         return filterBestSeller;
    //     }
    //     return filterAll; 
    // };
    //  const filteredData = mbldata.filter(filterFunction());







    //this is another way of writing categoty filter

    // const filterCriteria = useSelector((state) => state.filterReducer.filterCriteria);

    // const idstoshow = [3, 4, 6, 7];
    // const showAll = [1, 2, 3, 4, 5, 6, 7, 8];

    // const filterAll = (post) => idstoshow.includes(post.id) || showAll.includes(post.id);
    // const filterSale = (post) => [3, 4, 6, 7].includes(post.id);
    // const filterBestSeller = (post) => [1, 2, 5, 8].includes(post.id);


    // const filterFunction = () => {
    //     return (
    //         (!filterCriteria || filterCriteria.category === 'ALL') && filterAll ||
    //         filterCriteria.category === 'Sale' && filterSale ||
    //         filterCriteria.category === 'best seller' && filterBestSeller ||
    //         filterAll 
    //     );
    // };

    // const filteredData = mbldata.filter(filterFunction());

    // Filter on the basis of alphabets price (low to high) & vice versa

    // const [sortOption, setSortOption] = useState('newest');
    // const [sortedData, setSortedData] = useState(mbldata); // Set sortedData to mbldata initially

    // Function to sort the mbldata array based on the selected option
    // const sortMbldata = (option) => {
    //     const newData = [...mbldata];
    //     if (option === 'newest') {
    //         newData.sort((a, b) => new Date(b.date) - new Date(a.date));
    //     } else if (option === 'priceLowToHigh') {
    //         newData.sort((a, b) => a.price - b.price);
    //     } else if (option === 'priceHighToLow') {
    //         newData.sort((a, b) => b.price - a.price);
    //     } else if (option === 'nameAZ') {
    //         newData.sort((a, b) => a.title.localeCompare(b.title));
    //     } else if (option === 'nameZA') {
    //         newData.sort((a, b) => b.title.localeCompare(a.title));
    //     } else {
    //         newData.sort((a, b) => new Date(b.date) - new Date(a.date));
    //     }
    //     setSortedData(newData);
    // };


    // this is the option filter with correct logic
    // const sortMbldata = (option) => {
    //     const newData = [...mbldata];

    //     const discpriceIds = [3, 4, 6, 7]; // IDs of items with discprice
    //     const regularIds = [1, 2, 5, 8]; // IDs of regular items

    //     const getPrice = (item) => {
    //       return item.discprice ? parseFloat(item.discprice.slice(1)) : parseFloat(item.price.slice(1));
    //     };

    //     if (option === 'newest') {
    //       newData.sort((a, b) => new Date(b.date) - new Date(a.date));
    //     } else if (option === 'nameAZ') {
    //       newData.sort((a, b) => a.title.localeCompare(b.title));
    //     } else if (option === 'nameZA') {
    //       newData.sort((a, b) => b.title.localeCompare(a.title));
    //     } else {
    //       newData.sort((a, b) => {
    //         const aPrice = getPrice(a);
    //         const bPrice = getPrice(b);

    //         if (option === 'priceLowToHigh') {
    //           if (discpriceIds.includes(a.id) && discpriceIds.includes(b.id)) {
    //             return aPrice - bPrice; // Both items have discprice, sort by price
    //           } else if (discpriceIds.includes(a.id)) {
    //             return -1; // a has discprice, show it first
    //           } else if (discpriceIds.includes(b.id)) {
    //             return 1; // b has discprice, show it first
    //           } else {
    //             return aPrice - bPrice; // Both items are regular, sort by price
    //           }
    //         } else if (option === 'priceHighToLow') {
    //           if (regularIds.includes(a.id) && regularIds.includes(b.id)) {
    //             return bPrice - aPrice; // Both items are regular, sort by price in reverse order
    //           } else if (regularIds.includes(a.id)) {
    //             return -1; // a is regular, show it first
    //           } else if (regularIds.includes(b.id)) {
    //             return 1; // b is regular, show it first
    //           } else {
    //             return bPrice - aPrice; // Both items have discprice, sort by price in reverse order
    //           }
    //         }
    //         return 0;
    //       });
    //     }

    //     setSortedData(newData);
    //   };

    // // Call the sorting function with the current sortOption when the component mounts
    // useEffect(() => {
    //     sortMbldata(sortOption);
    // }, [sortOption]);

    // // Function to handle changes in the select element
    // const handleSortChange = (event) => {
    //     const selectedOption = event.target.value;
    //     setSortOption(selectedOption);
    // };


    // this is the combine category filter and sort filter

    const dispatch = useDispatch()


    const filterCriteria = useSelector((state) => state.filterReducer.filterCriteria);
    const sortOption = useSelector((state) => state.filterReducer.sortOption);

    

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        dispatch(setNewestfilter(selectedOption));
    };

    // Function to apply filtering based on filter criteria

    const filterFunction = (data) => {
        if (!filterCriteria || filterCriteria.category === 'ALL') {
          return data; // Return the original data when 'ALL' category is selected or no filter criteria present
        }
      
        const idstoshow = [3, 4, 6, 7];
        const showAll = [1, 2, 3, 4, 5, 6, 7, 8];
      
        const filterAll = (post) => idstoshow.includes(post.id) || showAll.includes(post.id);
        const filterSale = (post) => [3, 4, 6, 7].includes(post.id);
        const filterBestSeller = (post) => [1, 2, 5, 8].includes(post.id);
      
        if (filterCriteria.category === 'Sale') {
          return data.filter(filterSale);
        } else if (filterCriteria.category === 'best seller') {
          return data.filter(filterBestSeller);
        }
      
        return data.filter(filterAll);
      }

    // Function to sort the data based on the selected option
    const sortMbldata = (data, option) => {
        const discpriceIds = [3, 4, 6, 7]; // IDs of items with discprice
        const regularIds = [1, 2, 5, 8]; // IDs of regular items

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

    // Apply filtering and sorting to get the final data
    const filteredAndSortedData = sortMbldata(filterFunction(mbldata), sortOption);

    return (
        <>
            <section className='mbl-sect'>
                <div className="container-fluid py-sm-5">
                    <h1 className='mbl-head text-center pt-sm-2'>Mobile</h1>
                    <div className="row pt-sm-5 mt-sm-4 mt-5 ps-sm-2 justify-content-sm-between justify-content-center">
                        <div className="col-sm-3 filter-sep">
                            <span className='filter-mbl d-sm-flex d-none'>
                                Filter by
                            </span>
                            <div>
                                <Smalloffcanvas />
                            </div>
                            <div className='underline'></div>
                        </div>

                        <div className="col-sm-2 d-sm-flex d-none border border-1 py-sm-2 me-sm-1" style={{ width: '11rem' }}>
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
                        <Largeoffcanvas />

                        <div className="col-sm-10 my-sm-0 my-5">
                            <div className="row px-sm-3 justify-content-sm-start justify-content-center">
                                {filteredAndSortedData.map((post) => {

                                    const saleTag = [3, 4, 6, 7].includes(post.id)
                                    const remainTag = [1, 2, 5, 8].includes(post.id)
                                    return (
                                        <div className="col-xxl-2 col-sm-4 mbl-products col-5 
                                        mbl-map px-0 my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden"
                                            key={post.id} onClick={() => gotomobilefeat(post)}>

                                            <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                                            <div className='ps-3 mbl-main'>
                                                <p className='mbl-hd'>{post?.title}</p>
                                                <div className='d-flex'>
                                                    {saleTag && <del style={{color:"blue"}}>{post?.price}</del>}
                                                    {saleTag && <p className='ps-2' style={{color:"blue"}}>{post?.discprice}</p>}
                                                </div>
                                                {remainTag && <p style={{color:"blue"}}>{post?.price}</p>}

                                            </div>
                                            {saleTag && <div className='mbl-saletag text-center'>{post?.Sale}</div>}


                                        </div>

                                    )
                                })}

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

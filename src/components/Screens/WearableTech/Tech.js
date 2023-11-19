import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import'../Computers/comp.css';
import Smalloffcanvas from '../../Reusable/Smalloffcanvas/Smalloffcanvas';
import Largeoffcanvas from '../../Reusable/Largeoffcanvas/Largeoffcanvas';
import { techdata } from './Techdata';
import HelpCenter from '../Home/HelpCenter';
import Footer1 from '../Home/Footer1';
import Footer2 from '../Home/Footer2';
import {CgArrowsExchangeAltV} from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { setNewestfilter } from '../../../redux/action/Action';

export default function Tech() {
    const [data, setdata] = useState(techdata);
    // console.log(data)
    const navigate = useNavigate()

    const gotomobilefeat = (post) => {
        navigate('/techfeat', { state: { post } })
    }


// NEW CODE FOR FILTERING DATA

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
      
        const idstoshow = ['Tech3', 'Tech4', 'Tech6', 'Tech7'];
        const showAll = ['Tech1', 'Tech2', 'Tech3', 'Tech4','Tech5', 'Tech6', 'Tech7', 'Tech8'];
      
        const filterAll = (post) => idstoshow.includes(post.id) || showAll.includes(post.id);
        const filterSale = (post) => ['Tech3', 'Tech4', 'Tech6', 'Tech7'].includes(post.id);
        const filterBestSeller = (post) => ['Tech1', 'Tech2', 'Tech5', 'Tech8'].includes(post.id);
      
        if (filterCriteria.category === 'Sale') {
          return data.filter(filterSale);
        } else if (filterCriteria.category === 'best seller') {
          return data.filter(filterBestSeller);
        }
      
        return data.filter(filterAll);
      }

    // Function to sort the data based on the selected option
    const sortMbldata = (data, option) => {
        const discpriceIds = ['Tech3', 'Tech4', 'Tech6', 'Tech7']; // IDs of items with discprice
        const regularIds = ['Tech1', 'Tech2', 'Tech5', 'Tech8']; // IDs of regular items

        const getPrice = (item) => {
            return item.discprice ? parseFloat(item.discprice.slice(4)) : parseFloat(item.price.slice(4));
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
    const filteredAndSortedData = sortMbldata(filterFunction(techdata), sortOption);




























  return (
    <>
    <section className='mbl-sect'>
                <div className="container-fluid py-sm-5">
                    <h1 className='mbl-head text-center pt-sm-2'>Wearable & Tech</h1>
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

                        <div className="col-sm-2 d-sm-flex d-none border border-1 py-sm-2 me-sm-1"style={{width:'11rem'}}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>

                                    {/* add a function */}
                                   
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
                             {/* add a function */}
                            <select name="sort by" id="Sort" className="custom-select" onChange={handleSortChange} value={sortOption}>
                            <option value="#"></option>
                                        <option value="newest">Newest</option>
                                        <option value="priceLowToHigh">Price (Low to High)</option>
                                        <option value="priceHighToLow">Price (High to Low)</option>
                                        <option value="nameAZ">Name A-Z</option>
                                        <option value="nameZA">Name Z-A</option>
                            </select>
                            <div className="custom-select-icon">
                                <CgArrowsExchangeAltV style={{fontSize:'35px',color:'var(--bs-sec)'}}/>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between mt-sm-3">
                       
                        <Largeoffcanvas />




                        <div className="col-sm-10 my-sm-0 my-5">
                            <div className="row px-sm-3 justify-content-sm-start justify-content-center">
                                 {/* change the map array */}
                                {filteredAndSortedData.map((post, id) => {
                                    const saleTag = [2, 3, 5, 6].includes(id)
                                    const remainTag =[0,1,4,7].includes(id)
                                    return (
                                        <div className="col-xxl-2 col-sm-4 mbl-products col-5 mbl-map px-0 
                                        my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden " 
                                        key={id} onClick={() => gotomobilefeat(post)}>
                                            <img src={post?.thumbnail} alt="#" className='img-fluid mbl-img' />
                                            <div className='ps-3 mbl-main'>
                                                <p className='mbl-hd'>{post?.title}</p>
                                                <div className='d-flex'>
                                                    {saleTag && <del style={{color:'blue'}}>{post?.price}</del>}
                                                    {saleTag && <p className='ps-2'style={{color:'blue'}}>{post?.discprice}</p>}
                                                </div>
                                                  {remainTag &&  <p style={{color:'blue'}}>{post?.price}</p>} 

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

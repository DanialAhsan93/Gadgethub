import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom"
import '../../Reusable/Favoraties/favour.css'
import "../Home/home.css"
import '../Computers/comp.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { dronesdata } from "../Drones&Cameras/Dronesdata"
import { speakdata } from '../Audio/Speakers/Speakerdata';
import { techdata } from "../WearableTech/Techdata"
import { compdata } from "../Computers/Compdata"
import { mbldata } from "../Mobile/Mobiledata"
import { headdata } from '../Audio/Headphones/Headdata';
import { tvdata } from '../TV&HomeCinema/Tvdata';
import { tabdata } from '../Tablets/Tabletdata';
export default function Favoraties() {

  const location = useLocation();
  // const searchQuery = new URLSearchParams(location.search).get('query');
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   // Merge the product arrays into a single array
  //   const mergedProducts = [...headdata, ...mbldata, ...compdata, ...techdata, ...speakdata, ...dronesdata ,...tvdata,...tabdata];

  //   // Apply filter on products based on the title
  //   const querySearch = searchQuery?.toLowerCase() || '';
  //   const filtered = mergedProducts.filter((product) =>
  //     product.title.toLowerCase().includes(querySearch)
  //   );

  //   setFilteredProducts(filtered);
  // }
  // );

  const searchQuery = new URLSearchParams(location.search).get('query');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Merge the product arrays into a single array
    const mergedProducts = [...headdata, ...mbldata, ...compdata, ...techdata, ...speakdata, ...dronesdata, ...tvdata, ...tabdata];

    // Apply filter on products based on the title
    const querySearch = searchQuery?.toLowerCase() || '';
    const filtered = mergedProducts.filter((product) =>
      product.title.toLowerCase().includes(querySearch)
    );

    setFilteredProducts(filtered);
  }, [searchQuery, headdata, mbldata, compdata, techdata, speakdata, dronesdata, tvdata, tabdata]);




  const navigate = useNavigate()

  const gotomobilefeat = (post) => {
    navigate('/speakerfeat', { state: { post } })
  }

  // const handleClick = () => {
  //   navigate(-1); 
  // }



  return (
    <>
      <div className="container-fluid pt-5 " style={{ padding: " 0px 1.8rem" }}>
        <div className="bg-body py-5 my-5">
          {/* <button onClick={handleClick} style={{ background: "transparent", border: "none", color: " rgb(117, 31, 255)" }}>Go back</button> */}
          <div className="row  align-items-center text-center pb-5">
            <h3 className='reuse-heading'>Search Results for <br /> {searchQuery}</h3>
          </div>
          <div className="row  justify-content-lg-start justify-content-center px-5">
            {filteredProducts.length === 0 ? (
              <div className='col align-items-center d-flex justify-content-center '>


                <p className='align-items-center d-flex justify-content-center'
                >No Result Found</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  className="col-xxl-2 col-lg-3 col-md-3 col-sm-6 mbl-products mbl-map px-0 my-sm-0 mx-sm-0 my-1 mx-1 border border-1 overflow-hidden"
                  key={product.id} // Use product.id as the key
                  onClick={() => gotomobilefeat(product)}
                >
                  <img src={product?.thumbnail} alt="#" className="img-fluid mbl-img" />
                  <div className="ps-3 mbl-main">
                    <p className='mb-0 text-container2' style={{ height: "3rem" }}>{product?.title}</p>
                    <div className="d-flex">
                      <del style={{ color: "blue" }}>{product?.price}</del>
                      <p className="ps-2" style={{ color: "blue" }}>{product?.discprice}</p>
                    </div>

                  </div>
                </div>
              ))
            )}

          </div>
        </div>
      </div>



    </>
  )
}




























// <div key={product.id}>
//   <h3>{product.title}</h3>
//   <p>{product.price}</p>
//   {/* Add other product information as needed */}
// </div>
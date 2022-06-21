import React,{useState,useEffect} from "react";
import {useParams} from 'react-router';

const ProductDetails=()=>{

    const {sl}=useParams()
    const [details,setDetails]=useState(null)

   
    useEffect(
        ()=>{
            fetch('https://betatesting.net/projects/vishdev/wp-json/wc/v3/products?consumer_key=ck_0eabdb80ab0d965887667b3c9a2d1fe50ad960e8&consumer_secret=cs_411d7b9a0eb4c16585e6d2b47063c00cc7798d78&slug='+sl, {})
              .then(response => response.json()).then(d=>setDetails(d[0])).catch(e=>console.log(e))
            
        },
        []
    )
    
    if(!details) return ( <h1>Loading...</h1> )

    const regex = /(<([^>]+)>)/ig;
    const desc = details.short_description.replace(regex, '');
    const img=details.images.length>0?details.images[0].src:'';

    return(
        
       <div>
           <div className="pd-wrap">
           <div className="container">
           <div className="heading-section">
                <h2>Product Details</h2>
            </div>
            <div className="row">
            <div className="col-md-6">
               <div id="slider" className="owl-carousel product-slider">
                  <div className="item">
                     <img style={{width: "100%",height:"350px"}}  src={img} />
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="product-dtl">
                  <div className="product-info">
                     <div className="product-name">{ details.name }</div>
                     <div className="reviews-counter">
                        <div className="rate">
                           <input type="radio" id="star5" name="rate" value="5" checked />
                           <label for="star5" title="text">5 stars</label>
                           <input type="radio" id="star4" name="rate" value="4" checked />
                           <label for="star4" title="text">4 stars</label>
                           <input type="radio" id="star3" name="rate" value="3" checked />
                           <label for="star3" title="text">3 stars</label>
                           <input type="radio" id="star2" name="rate" value="2" />
                           <label for="star2" title="text">2 stars</label>
                           <input type="radio" id="star1" name="rate" value="1" />
                           <label for="star1" title="text">1 star</label>
                        </div>
                        <span>3 Reviews</span>
                     </div>
                     <div className="product-price-discount"><span>${details.price}</span></div>
                  </div>
                  <p>{ desc }</p>
               </div>
            </div>
         </div>
            </div>
           </div>
       </div>
    )
}

       
  

export default ProductDetails
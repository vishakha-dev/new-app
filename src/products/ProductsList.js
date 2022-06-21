import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts]=useState(null)
    useEffect(
        ()=>{
            fetch('https://betatesting.net/projects/vishdev/wp-json/wc/v3/products?consumer_key=ck_0eabdb80ab0d965887667b3c9a2d1fe50ad960e8&consumer_secret=cs_411d7b9a0eb4c16585e6d2b47063c00cc7798d78', {
                
              })
                .then(response => response.json()).then(d=>setProducts(d)).catch(e=>console.log(e))
        },
        []
    )
    
    
    if(!products) return ( <h1>Loading...</h1> )
    return (
            <div className="row">
                {products.map((dt,i)=>{
                    const img=dt.images.length>0?dt.images[0].src:'';
                    const regex = /(<([^>]+)>)/ig;
                    const desc = dt.short_description.replace(regex, '');
                    return (
                        <div className="col-md-4" key={dt.slug}>
                         <div className="card">
                         <img className="card-img" src={img} alt={dt.slug} style={{width: "100%"}}/>
                             <div className="card-img-overlay d-flex justify-content-end">
                             <a href="#link" className="card-link text-danger like">
                                 <i className="fas fa-heart"></i>
                             </a>
                             </div>
                             <div className="card-body">
                             <h4 className="card-title"><Link to={`product/${dt.slug}`}>{dt.name}</Link></h4>
                             <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                             <p className="card-text">{desc}</p>
                             <div className="buy d-flex justify-content-between align-items-center">
                                 <div className="price text-success"><h5 className="mt-4">${dt.price}</h5></div>
                             </div>
                             </div>
                         </div>
                         </div>
                    )
                    
                })}
            </div>
    )
}

export default ProductList
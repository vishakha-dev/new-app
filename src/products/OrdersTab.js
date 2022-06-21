import React,{useState,useEffect} from "react";
import dateFormat, { masks } from "dateformat";

const OrdersTab=()=>{
    const [orders,setOrders]=useState(null)
    useEffect(
        ()=>{
            fetch('https://betatesting.net/projects/vishdev/wp-json/wc/v3/orders?consumer_key=ck_0eabdb80ab0d965887667b3c9a2d1fe50ad960e8&consumer_secret=cs_411d7b9a0eb4c16585e6d2b47063c00cc7798d78', {
                
              })
                .then(response => response.json()).then(d=>setOrders(d)).catch(e=>console.log(e))
        },
        []
    )
    
    
    if(!orders) return ( <h1>Loading...</h1> )
    return (
            <div className="row">
               <table class="table table-striped">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((dt,i)=>{
                    return (
                        <tr>
                            <td>#{dt.id}</td>
                            <td>{ dateFormat(dt.date_created, "dddd, mmmm dS, yyyy, h:MM:ss TT")  }</td>
                            <td style={{textTransform: 'capitalize'}}>{ dt.status }</td>
                            <td>{dt.currency_symbol} {dt.total}</td>
                            <td>{dt.billing.email}</td>
                            <td>{dt.billing.phone}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
    )
}

export default OrdersTab
import React,{useState,useEffect} from "react";

const NewComponent =()=>{
    const [data,setData]=useState(null)

    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(d=>setData(d))
        },
        []
    )
    if(!data) return ( <h1>Loading...</h1> )
    return (
        <div>
            <ul>
           {data.map((dt,i)=>{
               return <li key={dt.id}>{dt?.title||'Hellow'}</li>
           })}
           </ul>
        </div>
    )
}
export default NewComponent
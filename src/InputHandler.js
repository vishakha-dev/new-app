import React,{useState} from "react";

const InputHandler=()=>{
    const [text,setText]=useState('');
    return (
        
        <div className="Input">
            <input type="text" value={ text } onChange={(e)=>{setText(e.target.value)}}/>
            <h1>{ text }</h1>
        </div>
    )
}
export default InputHandler
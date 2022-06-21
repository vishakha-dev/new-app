import React,{useState,useEffect} from "react";

const LoginHandler=()=>{
    const [uName,setName]=useState('')
    const [pass,setPass]=useState('')
    const [disabled, setDisabled] = useState(true)
   

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if(uName.length===0 || pass.length===0)
          {
            setDisabled(true)
          }
          else{
            setDisabled(false)
          }
          
        }, 500)
    
        return () => clearTimeout(delayDebounceFn)
      }, [uName,pass])

    return(
        <div className="Loginhandler">
            <form>
            <input type="text" value={uName} onChange={(e) => setName(e.target.value)}></input>
            <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>
            {!uName}
            {!pass}
            <input type="submit" value="Submit" disabled={disabled}/>
            </form>
        </div>
    )
}
export default LoginHandler
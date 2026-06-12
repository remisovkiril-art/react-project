import {useState} from "react";
//import "./Counter.css"
import style from "./Counter.module.css"
const Counter = ()=>{
    function handlerClick():void{
        //batch
        setValue(value+1)
    }
    const [value, setValue] = useState(240)
    return (
        <>
        <p className={style.counter}>Value <span style={value>250?{color:"red"}:{color:"black"}}>{value}</span></p>
            <button onClick={handlerClick}>Up</button>
        </>
    )
}
export default Counter
import React from "react";
const Input = ({type, id, name, value, placeholder, onChange, className})=>{
    return(
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} onChange={onChange} className={className}/>
    )
}
export default Input
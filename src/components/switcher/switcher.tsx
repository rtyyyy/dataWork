
import React from "react"

const Switcher = ({buttonHandler}) =>{
    const url32 = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const url1000 = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    return(
        <div style={{position:'relative', left:'30vw', top:'40vh'}}>
            <button className="btn btn-success" style={{width:80, marginRight:40}} onClick={()=>(buttonHandler(url32))}>32 el.</button>
            <button className="btn btn-danger" onClick={()=>(buttonHandler(url1000))}>1000 el.</button>
        </div>
    )
}

export default Switcher
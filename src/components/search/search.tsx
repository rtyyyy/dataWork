import { useState } from "react"



const Search = ({searchSend,searchValue,setSearchValue}) =>{
   
    console.log(searchValue)
    return(
        <div>
            <div className="input-group mb-3" style={{marginTop:20}}>
  <input
    type="text"
    className="form-control"
    placeholder="enter firstName"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    value={searchValue}
    onChange={(e)=>{setSearchValue(e.target.value)}}
    />
  <div className="input-group-append">
    <button
     className="btn btn-outline-secondary"
      type="button"
      onClick={() => searchSend(searchValue)}>
        Button
        </button>
  </div>
</div>
        </div>
    )
}

export default Search
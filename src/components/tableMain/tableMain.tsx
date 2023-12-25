import React, { useState } from "react";
import Table from "../table/table";
import DetailItem from "../details/details";
import Form from "../form/form";


const TableMain = ({detailRow, elements, sortData, directionSort, rowItem, isLoading,searchSend,searchValue, setSearchValue, getInputData}) =>{
    if(isLoading){
        return <h2>Please, wait...</h2>
          
      }
    
    return(
        <>
        <Form getInputData={getInputData} />
             <Table 
       details={detailRow}
       elements={elements}
        sortData={sortData}
         directionSort={directionSort}
         detailRow={detailRow}
         isLoading={isLoading}
         searchSend={searchSend}
         searchValue={searchValue}
          setSearchValue={setSearchValue}
         
          /> 
           
       <DetailItem detailItemData={rowItem}/>
        </>
    )
}

export default TableMain
import React, { useState } from 'react';
import './App.css';
import useServerData from './components/hooks/useServerData';
import Switcher from './components/switcher/switcher';
import TableMain from './components/tableMain/tableMain';
import Paginator from './components/paginator/paginator';



function App() {
  
 const [directionSort, setDirectionSort] = useState(true)
 const [isButtonClick, setIsButtonClick] = useState(false)
  const [rowItem, setRowItem] = useState('')
  const [url, setUrl] = useState('')
 const [{elements, setElements,isLoading}, getData] = useServerData({url,isButtonClick})
 const [currentPage, setCurrentPage] = useState(1)
const [limitElements] = useState(50)
const [searchValue, setSearchValue] = useState('')
const [newRow, setNewRow] = useState({})
//грузим данные в зависимости от тех что выберем//
const buttonHandler = (url) =>{
  setUrl(url)
  setIsButtonClick(true)
  
}

//поиск по имени//
const getFilteredData = () =>{
  if(!searchValue) {
    return elements
  }
  else {
    return elements.filter(
      el=>{
        return el['firstName'].toLowerCase().includes(searchValue.toLowerCase())
      }
    )
  }
  
}

const filteredData = getFilteredData()

//вычисляем количество страниц с данными//
 const lastRowBlock = currentPage * limitElements
 const firstRowBlock = lastRowBlock - limitElements
 const currentRowBlock = filteredData.slice(firstRowBlock, lastRowBlock)
 //получаем данные с инпутов //
const getInputData = ({id, firstName,lastName,phone,email})=>{
  setNewRow({id,firstName,lastName,phone,email})
  }
//добавляем новый элемент в начало списка//
 currentRowBlock.unshift(newRow)
//находим текущую страницу//
const paginate = pageNumber => setCurrentPage(pageNumber)
// делаем сортировку по алфавиту и по числа//
  const sortData =(field)=>{  
    const copyData = elements.concat()
    let sortData;
    if(directionSort){
      sortData = copyData.sort(
          (a,b)=>{return a[field]>b[field] ? 1 : -1}
        )
    } else {
      sortData = copyData.reverse()
    } 
    setElements(sortData)
    setDirectionSort(!directionSort)
  }

  const detailRow = (row) =>{
    setRowItem(row)
  }
  const searchSend = (t) =>{
console.log(t)
  }
 
  return (
    <div className="container">

      
     {
      !isButtonClick? <Switcher buttonHandler={buttonHandler}/>
      :
     
      <TableMain
     getInputData={getInputData}
      elements={currentRowBlock}
       detailRow={detailRow}
       isLoading={isLoading}
       sortData={sortData}
       directionSort={directionSort}
       rowItem={rowItem}
       searchSend={searchSend}
       searchValue={searchValue}
       setSearchValue={setSearchValue}
      /> 
       
     }
     <Paginator
     paginate={paginate}
     setCurrentPage={setCurrentPage}
     currentPage={currentPage}
      totalElements={elements.length}
      limitElements={limitElements}
      filteredData={filteredData}/>
    </div>
  );
}

export default App;





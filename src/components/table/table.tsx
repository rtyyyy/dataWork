import { useEffect, useState } from 'react'
import ArrowUp from '../svg/arrowUp'
import ArrowDown from '../svg/arrowDown'
import Search from '../search/search'



const Table = ({elements, sortData, directionSort, detailRow, searchSend, searchValue, setSearchValue}:any) => {
    const [fieldData, setFieldData] = useState('')

    const Arrow = () =>{
      return(directionSort? <ArrowDown/>:<ArrowUp/>)
    }
    
        const fieldSortData = (field: string) =>{
          sortData(field)
          setFieldData(field)
        }
    return(
        <div className='table__wrapper'>
          <Search searchSend={searchSend} searchValue={searchValue} setSearchValue={setSearchValue} />
<table className="table">
  <thead>
    <tr>
      <th onClick={() =>{fieldSortData('id')}}  >
        id {fieldData==='id' ? <Arrow/> : null}
        </th>
      <th onClick={() =>{fieldSortData('firstName')}}  >
        FirstName {fieldData==='firstName' ? <Arrow/> : null}
        </th>
      <th onClick={() =>{fieldSortData('lastName')}}  >
        LastName {fieldData==='lastName' ? <Arrow/> : null}
        </th>
      <th onClick={() =>{fieldSortData('Email')}} >
        Email {fieldData==='Email' ? <Arrow/> : null}
        </th>
      <th onClick={() =>{fieldSortData('Phone')}}  >
        Phone {fieldData==='Phone' ? <Arrow/> : null}
        </th>
    </tr>
  </thead>
  <tbody>
    
      {elements.map(
        (item =>(
            <tr key={item.email} onClick={()=>detailRow(item)}>
                <td >{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
            
        ))
      )}
    
    
  </tbody>
</table>

        </div>
    )
}

export default Table
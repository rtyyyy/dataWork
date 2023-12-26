const Paginator = ({totalElements,limitElements,paginate,setCurrentPage,currentPage}) =>{
  let totalPages: number[] = []
for (let i=1; i<= Math.ceil(totalElements/limitElements); i++){
  totalPages.push(i)
}
console.log(totalElements)
const prevPage = () =>{
  if(currentPage < 2){
    return
  }
  setCurrentPage( currentPage- 1)} 

  const nextPage = () =>{
    if(currentPage>totalPages.length - 1){
      return
    }
    setCurrentPage(currentPage + 1)} 
    console.log(totalPages)


if (totalElements <= 1) {
  return (
    <div className="pagination" style={{ display: "none" }}></div>
  );
} 
    return(
        <div>
            <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item  " >
      <a className="page-link" href="#"  onClick={prevPage} >Previous</a>
    </li>
    {totalPages.map((p)=>{
      return(
        <li className="page-item " key={p}>
        <a className="page-link" href="#" onClick={()=> paginate(p)} >{p}
        </a>
      </li>
      )
    })}
    <li className="page-item">
      <a className="page-link" href="#" onClick={nextPage} >Next</a>
    </li>
  </ul>
</nav>
        </div>
    )
}

export default Paginator
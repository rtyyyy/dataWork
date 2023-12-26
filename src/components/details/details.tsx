const DetailItem = ({detailItemData}) =>{
	const addressStreet = detailItemData&&detailItemData.address? detailItemData.address.streetAddress : null 
	const addressCity = detailItemData&&detailItemData.address? detailItemData.address.city : null 
	const addressState = detailItemData&&detailItemData.address? detailItemData.address.state : null 
	const addressZip = detailItemData&&detailItemData.address? detailItemData.address.zip : null 
    return(
        <div>
			
			<div>
				Выбран пользователь: <b>{detailItemData.firstName} </b> <b>{detailItemData.lastName} </b>
			</div>
			<div>
				Описание: <p style={{margin:0}}><b>{detailItemData.description} </b></p>
			</div>
			<div>
				Адрес проживания: <b>{addressStreet } </b>
			</div>
			<div>
				Город: <b>{addressCity} </b>
			</div>
			<div>
				Провинция/штат: <b>{addressState}</b>
			</div>
			<div>
				Индекс: <b>{addressZip } </b>
			</div>
			
        </div>
    )
}

export default DetailItem

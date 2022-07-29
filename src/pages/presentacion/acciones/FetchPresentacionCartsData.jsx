import DATA from './../../../store/db.js'

const FetchPresentacionCartsData = titleCart => {
	const searchArticulo = () => (
		DATA.articulos.find(art => (
			art.titulo === titleCart
		))
	)

	const crud = {
		"datos": searchArticulo(),
		"fotos": DATA.screenshot[titleCart]
	}
	
	return crud
}

export default FetchPresentacionCartsData

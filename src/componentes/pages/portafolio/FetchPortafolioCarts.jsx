// async
function FetchPortafolioCarts () {
	// let peticion = await fetch(`http://localhost/programacion/gralweb/portafolio_backend/ajax/articulos.php`);
	// let pros = await peticion.json();
	// let { datos } = pros;

	// return datos;

	return [
		{
			id: 1,
			titulo: "Cart 1",
			foto: "9.jpg"
		},
		{
			id: 2,
			titulo: "Cart 2",
			foto: "8.jpg"
		},
		{
			id: 3,
			titulo: "Cart 3",
			foto: "7.jpg"
		},
		{
			id: 4,
			titulo: "Cart 4",
			foto: "6.jpg"
		}
	];
}

export default FetchPortafolioCarts;

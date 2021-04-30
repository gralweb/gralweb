import React, { createContext, useState } from 'react'

const ContextApp = createContext(null)

const GralwebProvider = ({ children }) => {
	// Estado de los Datos de las Cartas
	const [ carts, setCarts ] = useState([])
	// Metodo Para Añadir los datos de las cartas
	const addCarts = newCarts => {
		setCarts([...carts, ...newCarts])
	}

	// Estado para Datos completos de las cartas
	const [ cart, setCart ] = useState({})
	// Metodo para guardar datos completos de las cartas
	const addCart = newCart => {
		setCart({ ...cart, ...newCart })
	}

	// Estado para las imagenes de las cartas
	const [cartImgs, setCartImgs] = useState({})
	// Metodo para guardar las imagenes de las cartas
    const addCartImgs = cartDataImgs => {
        setCartImgs({...cartImgs, ...cartDataImgs})
    }

	// Colocando Estados y Metodos en variable global para pasarlo al provider
	const global = {
		store: {
			carts,
			cart,
			cartImgs
		},
		actions: {
			addCarts,
			addCart,
			addCartImgs
		}
	}

	// Retornando el provider Con los Estados y Metodos
	return (
		<ContextApp.Provider value={ global } >
			{
				children
			}
		</ContextApp.Provider>
	)
}

export { ContextApp, GralwebProvider }
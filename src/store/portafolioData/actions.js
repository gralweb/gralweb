export const portafolioDataActions = {
	setPortafolioCarts: (state) => (data) => {
		const datos = [
			...state.portafolioDataCarts,
			{ data }
		];
		/** Do your logic here */
		return {
			...state,
			datos
			/** Any other scope of your store */
		};
	},
	/** You can add other PORTAFOLIODATA actions here */
};

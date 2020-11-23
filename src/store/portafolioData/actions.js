export const portafolioDataActions = {
  setPortafolioCarts: (state) => () => {
    /** Do your logic here */
    return {
      ...state,
      portafolioData: {
        ...state.portafolioData
        /** Your modified PORTAFOLIODATA store */
      },
      /** Any other scope of your store */
    };
  },
  /** You can add other PORTAFOLIODATA actions here */
};

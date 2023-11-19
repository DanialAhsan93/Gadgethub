const initialState = {
  favorities: [],
  isFavorite: JSON.parse(localStorage.getItem('isFavorite')) || {},
};

export const favoritiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_TO_FAVORITIES":

    //   const itemfvr = action.payload;

    //   // Check if the item already exists in the favorities
    //   const itemExists = state.favorities.some((item) => item.id === itemfvr.id);

    //   if (itemExists) {
    //     // If the item already exists in the favorities, create a new array with updated quantities
    //     const updatedFavorities = state.favorities.map((item, index) =>
    //       item.id === itemfvr.id ? { ...item, quantity: item.quantity + 1 } : item
    //     );

    //     return {
    //       ...state,
    //       favorities: updatedFavorities,
    //       isFavorite: state.favorities.some((item) => item.id === itemfvr.id),

    //     };
    //   } else {
    //     // If the item does not exist in the favorities, add the item with a quantity of 1
    //     const temp = { ...itemfvr, quantity: 1 };

    //     return {
    //       ...state,
    //       favorities: [...state.favorities, temp],
    //     };
    //   }

    // case "EXT_FAVORITIES":
    //   const itemext = action.payload;
    //   const updatedFavorities = state.favorities.filter((item) => item.id !== itemext);
    //   return {
    //     ...state,
    //     favorities: updatedFavorities,
    //   };
    case "ADD_TO_FAVORITIES":
      const itemfvr = action.payload;
      const itemExists = state.favorities.some((item) => item.id === itemfvr.id);

      let updatedFavorities;
      if (itemExists) {
        updatedFavorities = state.favorities.map((item) =>
          item.id === itemfvr.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const temp = { ...itemfvr, quantity: 1 };
        updatedFavorities = [...state.favorities, temp];
      }
      console.log('ADD_TO_FAVORITIES state:', state);

      // Update isFavorite for the specific item and persist in localStorage
      const updatedIsFavorite = { ...state.isFavorite, [itemfvr.id]: true };
      localStorage.setItem('isFavorite', JSON.stringify(updatedIsFavorite));

      return {
        ...state,
        favorities: updatedFavorities,
        isFavorite: updatedIsFavorite,
      };

    case "EXT_FAVORITIES":
      const itemext = action.payload;
      const updatedFavoritiesExt = state.favorities.filter((item) => item.id !== itemext);

      // Update isFavorite for the specific item and persist in localStorage
      const updatedIsFavoriteExt = { ...state.isFavorite, [itemext]: false };
      localStorage.setItem('isFavorite', JSON.stringify(updatedIsFavoriteExt));

      return {
        ...state,
        favorities: updatedFavoritiesExt,
        isFavorite: updatedIsFavoriteExt,
      };

    case "TOGGLE_FAVORITIES":
      const isCurrentlyFavorite = state.isFavorite[itemfvr.id] || false;

      // Update isFavorite for the specific item and persist in localStorage
      const updatedIsFavoriteToggle = { ...state.isFavorite, [itemfvr.id]: !isCurrentlyFavorite };
      localStorage.setItem('isFavorite', JSON.stringify(updatedIsFavoriteToggle));

      return {
        ...state,
        isFavorite: updatedIsFavoriteToggle,
      };

    default:
      return state;
  }
}

export default favoritiesReducer;












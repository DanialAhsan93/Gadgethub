
const INIT_STATE = {
  cart: [],
  totalprice:0,
}

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // case 'ADD_CART':
    //     return{
    //         ...state,
    //         cart:[...state.cart, action.payload]
    //     }

    case 'ADD_CART':
      
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // If the item already exists in the cart, create a new array with updated quantities
        const updatedCart = state.cart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the item does not exist in the cart, add the item with a quantity of 1
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }

  //   case 'ADD_CART':
  // const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

  // if (itemIndex >= 0) {
  //   // If the item already exists in the cart, create a new array with updated quantities
  //   const updatedCart = state.cart.map((item, index) =>
  //     index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   const newPrice = parseFloat(action.payload.price.replace('$', '')); // Remove "$" and convert to number
  //   const newTotalPrice = state.totalprice + newPrice;
  //   console.log('New Total Price:', newTotalPrice);
  //   return {
  //     ...state,
  //     cart: updatedCart,
  //     totalprice: newTotalPrice,
  //   };
  // } else {
  //   // If the item does not exist in the cart, add the item with a quantity of 1
  //   const temp = { ...action.payload, quantity: 1 };
  //   const newPrice = parseFloat(action.payload.price.replace('$', '')); // Remove "$" and convert to number
  //   const newTotalPrice = state.totalprice + newPrice;
  //   console.log('New Total Price:', newTotalPrice);
  //   return {
  //     ...state,
  //     cart: [...state.cart, temp],
  //     totalprice: newTotalPrice,
  //   };
  // }


    case 'DLT_CART':
      const existingItemIndex = state.cart.findIndex((item) => item.id === action.payload);
      if (existingItemIndex >= 0) {
        const existingItem = state.cart[existingItemIndex];
        // If the quantity is greater than 1, decrease the quantity by 1
        if (existingItem.quantity > 1) {
          const updatedCart = state.cart.map((item, index) =>
            index === existingItemIndex ? { ...item, quantity: item.quantity - 1 } : item
          );
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          // If the quantity is 1, remove the item from the cart
          const updatedCart = state.cart.filter((item) => item.id !== action.payload);
          return {
            ...state,
            cart: updatedCart,
          };
        }
      }

      return state;

    case 'RMV_CART':
      const itemIdToRemove = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== itemIdToRemove);
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state
  }
}








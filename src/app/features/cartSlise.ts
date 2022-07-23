import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface itemInCart {
  id: number,
  price: number,
  quantity: number,
  img: string,
  name: string,
  discount: number,
}

interface cartItemsProps {
  itemsInCart: itemInCart[],
  quantity: number,
  totalAmount: number,
  discount: number,
}

const initialState: cartItemsProps = {
  itemsInCart: [],
  totalAmount: 0,
  quantity: 0,
  discount: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<itemInCart>) => {
      const isItemExist = state.itemsInCart.find(item => item.id === action.payload.id);
      if(!isItemExist) {
        state.itemsInCart = [...state.itemsInCart, {...action.payload, quantity: 1}];
      }else {
        state.itemsInCart = state.itemsInCart.map(item => {
          if(item.id === action.payload.id) {
            return {...item, quantity: item.quantity + 1}
          }else{
            return item;
          }
        })
      }
      state.quantity++;
      state.totalAmount += action.payload.price;
      // state.discount += action.payload.discount;
    },
    removeFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload.id);
      state.quantity -= action.payload.qty;
      state.totalAmount -= action.payload.price * action.payload.qty;
    },
    addItemQuantity: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload.id) {
          return {...item, quantity: item.quantity + 1};
        }else{
          return item;
        }
        
      });
      state.quantity++
      state.totalAmount += action.payload.price;
      // state.discount += action.payload.discount;
    },
    subtractItemQuantity: (state, action) => {
      const subItem = state.itemsInCart.find(item => item.id === action.payload.id);
      if(subItem.quantity === 1) {
        state.itemsInCart = state.itemsInCart.filter(item => item.id !== subItem.id)
      }else{
        subItem.quantity -= 1;
      };
      state.quantity--
      state.totalAmount -= action.payload.price;
    }
  }
});

export const {addToCart, addItemQuantity, subtractItemQuantity, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
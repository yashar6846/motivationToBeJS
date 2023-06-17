import axios from 'axios';

export const addToCart = item => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = itemId => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

export const fetchItems = () => {
  return dispatch => {
    axios.get('http://localhost:8080/items').then(response => {
      dispatch(addToCart(response.data));
    });
  };
};

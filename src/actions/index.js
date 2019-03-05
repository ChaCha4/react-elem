import * as actionTYpes from '../constants/actionTypes';
import axios from 'axios';
export const getGoods = () => dispatch => {
  axios.get('http://localhost:3008/goods').then(res => {
    dispatch({ type: actionTYpes.GET_GOODS, goods: res.data });
  });
};

export const addToCart = id => ({
  type: actionTYpes.ADD_TO_CART,
  // 触发reducer让reducer更改store的内容
  id
});
export const delToCart = id => ({
  type: actionTYpes.DEL_TO_CART,
  id
});

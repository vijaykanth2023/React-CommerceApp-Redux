import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ProductListItem from '../component/ProductListItem';
import { modifyItem, removeItem } from '../redux/reducer/Cart';

const Cart = () => {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1}));
    }
    const decrementItem = (item) => {
      if(item.count === 1){
        dispatch(removeItem(item));
      }
      else{
      dispatch(modifyItem({ ...item, count: item.count - 1}));
    }
  };
  const removeItemFromCart = (item) =>{
    dispatch(removeItem(item))
  }
  return (
    <>
        {list.length >0 ?(
        <>
        {list.map((item) => (
        <ProductListItem 
        {...item} 
        key={item.id} 
        incrementItem={() => incrementItem(item)}
        decrementItem={() => decrementItem(item)}
        removeItem={() => removeItemFromCart(item)} />
        ))}
        <Button variant="contained" color="success" className='mt-4' onClick={()=>navigate('/checkout')}>Goto Checkout</Button>
        </>
        ): <h5 className='shadow m-5 p-5'>No product found</h5>}
    </>
  );
}

export default Cart

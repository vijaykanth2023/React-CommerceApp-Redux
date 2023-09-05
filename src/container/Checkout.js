import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import ProductListItem from '../component/ProductListItem';
import { ProductList } from '../data/ProductList';

const Checkout = () => {
    const list = useSelector((state) => state.cart.list);
    const navigate=useNavigate();
    const params=useParams();
    const [state,setState]=useState(params.id ? 
    [    {
        ...ProductList.find((element) => element.id === parseInt(params.id)),
        count : 1,
        }]
        :list
        );
    const incrementItem = (item) => {
        const index = state.findIndex((product) => product.id === item.id );
        setState((state) => [
            ...state.slice(0,index),
            { ...item[index], count: item.count + 1},
            ...state.slice(index+1),
        ]);
    }
    const decrementItem = (item) => {
      if(item.count === 1){
        removeItemFromCart(item);
      }
      else{
        const index = state.findIndex((product) => product.id === item.id );
        setState((state) => [
            ...state.slice(0,index),
            { ...item[index], count: item.count - 1},
            ...state.slice(index+1),
        ]);
    }
  };
  const removeItemFromCart = (item) =>{
    const index = state.findIndex((product) => product.id === item.id );
        setState((state) => [
            ...state.slice(0,index),
            ...state.slice(index+1),
        ]);
  }
  return (
    <>
        {state.length >0 ?(
        <>
        {state.map((item) => (
        <ProductListItem 
        {...item} 
        key={item.id} 
        incrementItem={() => incrementItem(item)}
        decrementItem={() => decrementItem(item)}
        removeItem={() => removeItemFromCart(item)} />
        ))}
        <Button variant="contained" color="success" className='mt-4' onClick={()=>navigate('/Sucess')}>Place Order</Button>
        </>
        ): <h5 className='shadow m-5 p-5'>No item in Checkout</h5>}
    </>
  );
}

export default Checkout

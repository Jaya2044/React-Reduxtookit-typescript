import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cakeOrder, cakeRestock } from './CakeSlice';

const CakeView = () => {
  const cakes = useAppSelector((state) => state.cakes.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of Cakes - {cakes}</h2>
      <button onClick={() => dispatch(cakeOrder())}>Cake Order</button>&nbsp;&nbsp;
      <button onClick={() => dispatch(cakeRestock(5))}>Cake Restock</button>
    </div>
  )
}

export default CakeView
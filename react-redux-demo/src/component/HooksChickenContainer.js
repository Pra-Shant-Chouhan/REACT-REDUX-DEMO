import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyChicken } from './redux';

const HooksChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens)
    const dispatch = useDispatch()
  return (
    <div>
    <h2>Num of Hook Chicken -{numOfChickens}</h2>
    <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
</div>
  )
}

export default HooksChickenContainer
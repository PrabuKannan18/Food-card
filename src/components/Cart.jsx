import React, { useEffect, useState } from 'react'
import './card.css';


export const Cart = ({card,setCard}) => {
  const[total,setTotal] = useState(0);
  useEffect(()=>{
    setTotal(card.reduce((acc,curr)=>acc + parseInt(curr.amt
    ),0))
  },[card]);
  return (
    <>
    <h1 className='card-heading'>Card products</h1>
    <div className="card-container">
      {card.map((product)=>(
        <div className="card-product" key={product.id}>
        <div className="img">
          <img src={product.pic}alt='pic1'/>
        </div>
        <div className="card-product-details">
          <h3>{product.name}</h3>
          <p>price Rs: {product.amt} </p>
        </div>
      </div>
      ))}

    </div>
    <h2 className='card-amt'>Total amount Rs: {total}</h2>
    
    </>
  )
}

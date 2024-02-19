import React, { useContext } from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/Layout/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../../Utilis/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Cart = () => {
  const[{basket, user},dispatch]=useContext(DataContext);
  const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  },0) 

const increment =(item)=>{
  dispatch({
type: Type.ADD_TO_BASKET, item
  })
}


const decrement =(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET, id
  })

}
  return (
   
      <LayOut>
        <section className={classes.container} >
   <div className={classes.cart_container}>
    <h2>Hello</h2>
    <h3>Your Shopping basket</h3>
    <hr />
    {
      basket?.length===0?(<p>Oppps ! No item in your cart </p>):(
        basket?.map((item,i)=>{
          return  <section className={classes.card_product}>         
          <ProductCard
          key={i}   
          product={item}
          renderDesc={true}
          renderAdd={false}
          flex={true}
          />
           <div className={classes.btn_container}> 
            <button className={classes.btn} onClick={()=>increment(item)}>
            <IoIosArrowUp size={20} />
              </button>
            <span>{item.amount}</span>
            <button className={classes.btn} onClick={()=>decrement(item.id)}>
              <IoIosArrowDown size={20} />
            </button>
            </div>
          </section>
          
         
        })
      )
    }
   </div>
    {basket?.length !==0 &&(
      <div className={classes.subtotal}  >
<div>
  <p>Sub Total({basket?.length}items)</p>
  <CurrencyFormat amount={total}/>
</div>
<span>
  <input type="checkbox" /> <small>
    This Order Contains a gift
  </small>
</span>
<Link to = '/payment'><small>continue to checkout</small></Link>
      </div>
    )}
    </section>
      </LayOut>
 
  )
}

export default Cart
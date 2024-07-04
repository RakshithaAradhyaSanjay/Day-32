import React from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { increaseQuantity,decreaseQuantity } from './cartslice';

const  Cart = () => {
const products = useSelector((state) => state.cart.products);
const dispatch = useDispatch();

//calculate the total quantity and amount

const totalQuantity = products.reduce((total,product) => total + product.quantity,0);
const totalAmount =  products.reduce((total,product) => total+product.quantity * product.price,0);

  return (
    <div className="cart">
        <h2>Shopping Cart</h2>
        <div id="cart-items">
            {products.map((product) => (
                <div className='cart-item' key={product.id}>
                    <img src={product.thumbnail} alt={product.title}/>
                   <div>{product.title}</div>
                   <div>{product.price}</div>
<div>
    <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
    {product.quantity}
   <button onClick={() => dispatch(increaseQuantity(product.id))}></button>
</div>
<div>${(product.quantity * product.price).toFixed(2)}</div>
                </div>
             
            ))}
        </div>
        <div className='cart-total'>
            <p>Total quantity : <span id = "total-quantity"> {totalQuantity}</span></p>
            <p>Total amount : <span id = "total-amount"> {totalAmount.toFixed(2)}</span></p>
        </div>
    </div>
  )
}

export default Cart
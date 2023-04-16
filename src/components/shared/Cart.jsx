import React , {useContext} from 'react';
import { cartContext } from '../../context/CartContextProvider';
import {shorten} from '../../helpers/functions';

const Cart = (props) => {
    const {dispatch} = useContext(cartContext);

    const {image,title,price,quantity}=props.data;
    return (
        <div>
            <img src={image} alt="pro" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={()=>dispatch({type:'DECREASE' , payload:props.data})}>-</button>:
                    <button onClick={()=>dispatch({type:'REMOVE_ITEM' , payload:props.data})}>remove</button>
                }
                <button onClick={()=>dispatch({type:'INCREASE' , payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;
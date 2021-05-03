import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, prd) => total + prd.price, 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let Shiping = 0;
    if (total > 35) {
        Shiping = 0;
    }
    if (total > 15) {
        Shiping = 4.99;
    }
    else if (total > 0) {
        Shiping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = total + Shiping + Number(tax);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Sommury</h4>
            <h6>Items Order : {cart.length}</h6>
            <p>Total Price : {total}</p>
            <p><small>Shiping Cost: {Shiping}</small></p>
            <p><small>Tax or Vat : {tax}</small></p>
            <p>Total Price : $ {formatNumber (grandTotal)}</p>
        </div>
    );
};

export default Cart;
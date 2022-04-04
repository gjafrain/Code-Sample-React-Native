import React from 'react';
import { useSelector } from 'react-redux';
import { stockInActive } from '../../../utils/common';
// CHILD 
import { AddCartButton } from '../AddCartButton';
import { OutofStock } from '../OutofStock';
import { UpdateCartButton } from '../UpdateCartButton';

export default function CartButtonHandler({ product, cartImageBox, varient, showOutStock = true }) {

    const cartItems = useSelector(state => state.cart.items),
        cartItem = cartItems.find(x => (x.productId === product.id || x.productId === product.productId));

    return (varient?.isActiveStock && (varient?.stock < stockInActive || varient?.productInStock < stockInActive))
        ? showOutStock ? <OutofStock /> : <></>
        : !cartItem ?
            <AddCartButton cartImageBox={cartImageBox} product={product} />
            : <UpdateCartButton cartImageBox={cartImageBox} cartItem={cartItem} />
}

import React, { useEffect, useState } from 'react';
// CHILD
import CategoryProducts from './CategoryProducts';
//
import { fetchAllProduct } from '../../../redux/modules/product/action';


export default function ShopAllProducts({ Styles, dispatch, refresh }) {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        refresh && getAllProducts();
    }, [refresh])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        const onSuccess = ({ data }) => { setAllProducts(data) }
        const onFail = (err) => { }
        dispatch(fetchAllProduct({ onSuccess, onFail }))
    }

    return (
        <CategoryProducts Styles={Styles} title={"Shop All Werehouse Products"} data={allProducts} isVerticalList={false} />
    )
}

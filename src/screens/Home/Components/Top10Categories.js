import React, { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
// COMPONENTS
import CategoryProducts from './CategoryProducts';
// REDUX
import { fetchTop10Categories } from '../../../redux/modules/category/action';
import { errorMessage } from '../../../utils/common'


export default function Top10Categories({ Styles, dispatch, refresh, navigation }) {

    const [top10Categories, setTop10Categories] = useState([{}, {}, {}, {}, {}]),
        { fetchTop10CategoriesPending } = useSelector(state => state.category);

    useEffect(() => {
        refresh && getTopCategories();
    }, [refresh])

    useEffect(() => {
        getTopCategories();
    }, [])

    const getTopCategories = useCallback(() => {
        const onSuccess = ({ data }) => setTop10Categories(data)
        const onFail = ({ message }) => errorMessage(message)
        dispatch(fetchTop10Categories({ onSuccess, onFail }))
    })
    return top10Categories.map((x, i) => (
        <CategoryProducts key={i} Styles={Styles} isVerticalList={i % 2 !== 0} title={x.name} navigation={navigation} data={x.products} categoryId={x.id} loading={fetchTop10CategoriesPending} />
    ))
}

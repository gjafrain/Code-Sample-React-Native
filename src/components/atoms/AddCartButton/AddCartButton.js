import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
// STYLES
import Styles from './Style';
// REDUX
import { addCartItem } from '../../../redux/modules/cart/action';
import { Icon } from '../Icon';
import { SECONDARY, THIRD } from '../../../styles/colors';
import { errorMessage } from '../../../utils/common';

export default function AddCart({ cartImageBox = {}, product = {} }) {

    const dispatch = useDispatch(),
        [loader, setLoader] = useState(false);

    const add = useCallback(() => {
        setLoader(true)
        const onSuccess = ({ }) => {
            setLoader(false)
        }
        const onFail = ({ message }) => {
            setLoader(false)
            errorMessage(message)
        }
        const payload = {
            productId: product.id,
            productVarientId: product.varients[0].id
        }
        dispatch(addCartItem({ data: payload, onSuccess, onFail }))
    }, [product.id])

    return (
        <TouchableOpacity onPress={add}>
            <View style={Styles.container}>
                <Icon name="Plus" loader={loader} loaderColor={SECONDARY} size="xs" container={[Styles.imageBox, cartImageBox]} imageStyle={{ tintColor: SECONDARY }} />
                <View style={[Styles.addCartTextBox]}>
                    <Text style={Styles.addCartText}>Add</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

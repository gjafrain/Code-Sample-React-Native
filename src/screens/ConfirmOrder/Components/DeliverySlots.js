import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// 
import Styles from '../Style';
import CommonStyles from '../../../styles/commonStyle';
import { fetchDeliverySlots } from '../../../redux/modules/order/action';
import { errorMessage } from '../../../utils/common';
import { SkeletonLoader } from '../../../components/atoms/SkeletonLoader';
import Style from '../../../components/molecules/BottomModal/ModalViews/BasketModalView/Style';

export default function DeliverySlots({ setDeliverySlot }) {

    const dispatch = useDispatch(),
        { fetchDeliveryLoading } = useSelector(state => state.order),
        [deliverySlot, setDeliverySlots] = useState([{}, {}, {}, {}, {}, {}]),
        [activeSlot, setActiveSlot] = useState(0);


    useEffect(() => {
        getDeliverySlots();
    }, []);

    const getDeliverySlots = () => {
        const onSuccess = ({ data }) => {
            setDeliverySlot(data[0])
            setDeliverySlots(data)
        }
        const onError = ({ message }) => errorMessage(message)
        dispatch(fetchDeliverySlots({ onSuccess, onError }))
    }

    const handleActiveDeliverySlots = (index, slot) => {
        setActiveSlot(index);
        setDeliverySlot(slot);
    }

    const _renderItem = ({ item, index }) => {
        const active = activeSlot === index ? Styles.activeSlot : {},
            activeText = activeSlot === index ? Styles.activeText : Styles.inactiveText;
        return fetchDeliveryLoading
            ? <SkeletonLoader container={Styles.loadingSlotContainer} linearContainer={Styles.linearSlotContainer} width={Styles.linearSlotContainer.width} />
            : <TouchableOpacity
                key={index}
                onPress={() => { handleActiveDeliverySlots(index, item) }}
                style={[Styles.slot, index === 0 && Styles.scrollFirstItem, active]}
            >
                <View style={CommonStyles.fRow}>
                    <Text style={[Styles.slotDay, activeText]}>{moment(item.start).format('ddd')}, </Text>
                    <Text style={[Styles.slotDay, activeText]}>{moment(item.start).format('MMM')}</Text>
                </View>
                <Text style={[Styles.date, activeText]}>{moment(item.start).format('DD')}</Text>
                <View style={[CommonStyles.fRow, CommonStyles.alignCenter]}>
                    <Text style={[Styles.slotTime, activeText]}>{moment(item.start).format('hh A')}</Text>
                    <Text style={[Styles.textDivide, activeText]}>-</Text>
                    <Text style={[Styles.slotTime, activeText]}>{moment(item.end).format('hh A')}</Text>
                </View>
            </TouchableOpacity>
    }
    return (
        <View style={Styles.section}>
            <Text style={Styles.sectionTitle}>Drlivery Slot</Text>
            <View style={Styles.slots}>
                <FlatList data={deliverySlot}
                    horizontal={true}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

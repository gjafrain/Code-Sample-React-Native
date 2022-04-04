import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import { Icon } from '../../../components/atoms/Icon';
import { OrderStatusEnum } from '../../../utils/enum';

export default function OrderStatusList({ Styles, data = [] }) {
    const customStatus = []
    Object.keys(OrderStatusEnum).map(y => {
        if (!data.find(x => x.status == y)&&y != "5" && y != "4") customStatus.push({ status: y })
    });
    data = [...data, ...customStatus]

    return (
        <View style={Styles.orderStatusSection}>
            {data.map((status, i) => {
                return <View style={Styles.status} key={i}>
                    <View style={[Styles.fRow, Styles.alignCenter]}>
                        <View style={[Styles.stausIconBox, !status.createdAt && Styles.stausIconBoxInactive]}>
                            {status.createdAt &&<Icon name={'Tick'} size={'xs'} imageStyle={Styles.tickIcon} />}
                        </View>
                        <View>
                            <Text style={Styles.orderStatusLabel}>{OrderStatusEnum[status.status]}</Text>
                            {status.createdAt && <Text style={Styles.orderStatusDate}>{moment(status.createdAt).format('DD MMM YYYY hh:mm a')}</Text>}
                        </View>
                    </View>
                    {i !== (data.length - 1) && <View style={[Styles.bottomActiveLine, !status.createdAt && Styles.bottomInactiveLine]} />}
                </View>
            })}
        </View>
    )
}

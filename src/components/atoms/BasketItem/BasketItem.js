import React from 'react';
import { View, Text, Image } from 'react-native';
// STYLE
import Styles from './Style';
// CHILD
import { Price } from '../Price';
import { UpdateCartButton } from '../UpdateCartButton';
import commonStyle from '../../../styles/commonStyle';
import { config } from '../../../utils/apiConfig';
import LinearGradient from 'react-native-linear-gradient';
import { GRAY_LIGHT, WHITE } from '../../../styles/colors';
import { WINDOW_WIDTH } from '../../../styles/mixins';
import { Localize, stockInActive } from '../../../utils/common';
import { CartButtonHandler } from '../CartButtonHandler';

export default function BasketItem({ cartItem, index, lastIndex }) {
    return (
        <View>
            <View style={[Styles.container, index === 0 && Styles.topSpace, (cartItem.isActiveStock && !cartItem.productInStock) && Styles.outofStock]} >
                <View style={Styles.productImageBox}>
                    <Image source={{ uri: config.BASE_URL + "/" + cartItem.image }} style={Styles.productImage} />
                </View>
                <View style={commonStyle.flex1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                        <Text style={Styles.title}>{Localize(cartItem.name)}</Text>
                        {(cartItem.isActiveStock && !cartItem.productInStock)
                            ? <></>
                            : <Text style={Styles.itemTotalPrice}>
                                <Price price={cartItem.price} showOldPrice={false} />
                            </Text>
                        }
                    </View>
                    <View style={[commonStyle.fRow, commonStyle.spaceBetween, commonStyle.alignCenter]}>
                        <View>
                            <Text style={Styles.itemPrice}><Price price={cartItem.productPrice} showOldPrice={false} /></Text>
                            <Text style={Styles.itemWeight}>{cartItem.weight} {Localize(cartItem.weightType)}</Text>
                        </View>
                        <CartButtonHandler product={cartItem} varient={cartItem} cartImageBox={Styles.cartImageBox} />
                    </View>
                </View>
            </View>
            <View style={[Styles.cartPriceStatus, lastIndex && Styles.bottomSpace]}>
                {(cartItem.priceStatus !== 'eql') && <Text style={[Styles.cartPriceStatusText, Styles[cartItem.priceStatus]]}>
                    {`${Localize(cartItem.name)}'s price has been ${cartItem.priceStatus === "incr" ? "increased" : "decreased"} by`} <Price price={cartItem.priceDiff} isSplit={false} />
                </Text>}
            </View>
            {!lastIndex && <LinearGradient
                colors={[WHITE, GRAY_LIGHT, GRAY_LIGHT, WHITE]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height: 1, width: WINDOW_WIDTH }} />}
        </View>
    )
}

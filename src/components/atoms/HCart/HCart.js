import React from 'react';
import { View, Text, Image } from 'react-native';
// STYLE
import Styles from './Style';
import commonStyle from '../../../styles/commonStyle';
// CHILD
import { Price } from '../Price';
import { CartButtonHandler } from '../CartButtonHandler';
import { config } from '../../../utils/apiConfig';
import { SkeletonLoader } from '../SkeletonLoader';
import LinearGradient from 'react-native-linear-gradient';
import { GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, WHITE } from '../../../styles/colors';
import { WINDOW_WIDTH } from '../../../styles/mixins';
import { Localize } from '../../../utils/common';

export default function HCart({ product = {}, startingSpace = false, index, loading, lastIndex }) {
    const varient = product && product.varients ? product.varients[0] || {} : {};
    return (
        loading ? <SkeletonLoader container={Styles.skeletonLoadingContainer} linearContainer={Styles.loadingLinearContainer} width={Styles.loadingLinearContainer.width} />
            : <View>
                <View style={[Styles.container, index === 0 && startingSpace && Styles.startingSpace]} >
                    <View style={[Styles.titleContainer]}>
                        <View style={commonStyle.fRow}>
                            <Text style={Styles.title}>{Localize(product.name)}</Text>
                            {/* <Text style={Styles.textDivide}> / </Text> */}
                            {/* <Text style={Styles.title}>फूलदार गोभी</Text> */}
                        </View>
                        {product.discreption ? <Text style={Styles.descreption}>{Localize(product.discreption)}</Text> : <></>}
                    </View>
                    <View style={[commonStyle.fRow, commonStyle.spaceBetween, commonStyle.alignCenter]}>
                        <View style={[commonStyle.fRow, commonStyle.spaceBetween, commonStyle.alignCenter]}>
                            <View style={Styles.productImageBox}>
                                <Image source={{ uri: config.BASE_URL + "/" + product.image }} style={Styles.productImage} />
                            </View>
                            <View>
                                <Price price={varient.updatedPrice} oldPrice={varient.price} />
                                <Text style={Styles.qty}>{varient.weight} {Localize(varient?.type?.name)}</Text>
                            </View>
                        </View>
                        <CartButtonHandler cartImageBox={Styles.cartImageBox} product={product} varient={varient} />
                    </View>

                </View>
                {
                    lastIndex ? <></> : <LinearGradient
                        colors={[WHITE, GRAY_LIGHT, GRAY_LIGHT, WHITE]}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height: 1, width: WINDOW_WIDTH }} />
                }
            </View>
    )
}

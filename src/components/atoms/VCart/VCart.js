import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';
// STYLE 
import Styles from './Style';
import CommomStyle from '../../../styles/commonStyle';
// CHILD
import { Price } from '../Price';
// import { AddCartButton } from '../AddCartButton';
import { CartButtonHandler } from '../CartButtonHandler';
import { config } from '../../../utils/apiConfig';
import { SkeletonLoader } from '../SkeletonLoader';
import { Localize, stockInActive } from '../../../utils/common';
import { OutofStock } from '../OutofStock';


export default function VCart({ product, index, container = {}, loading = false, startingSpace, lastSpace }) {
    const varient = product && product.varients ? product.varients[0] || {} : {},
        inStock = (varient?.isActiveStock && varient?.stock < stockInActive);
    return loading
        ? <SkeletonLoader container={Styles.loadingContainer} linearContainer={{ ...Styles.loadingLinearContainer, ...container }} width={Styles.loadingLinearContainer.width} />
        : <View style={[Styles.container, container, startingSpace && Styles.startingSpace, lastSpace && Styles.lastSpace]} key={index}>
            <View style={Styles.imageBoxWrapper}>
                <View style={[Styles.productImageBox, inStock && { opacity: .2 }]}>
                    <Image style={Styles.productImage} source={{ uri: config.BASE_URL + "/" + product.image }} />
                </View>
                {inStock && <OutofStock container={Styles.outofStockContainer} outofStockText={Styles.outofStockText} />}
            </View>
            <View style={Styles.productInfo}>
                <Text style={Styles.title}>{Localize(product.name)}</Text>
                <View style={[CommomStyle.fRow, CommomStyle.spaceBetween, CommomStyle.alignCenter]}>
                    <View>
                        <Price price={varient.updatedPrice} oldPrice={varient.price} />
                        <Text style={Styles.qty}>{varient.weight} {Localize(varient?.type?.name)}</Text>
                    </View>
                    <CartButtonHandler cartImageBox={Styles.cartImageBox} product={product} varient={varient} showOutStock={false} />
                </View>
            </View>
        </View>
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard, View, ScrollView } from 'react-native';
// COMPONENTS
import { TheBottomTab } from '../../components/molecules/TheBottomTab';
import { TheContainer } from '../../components/molecules/TheContainer';
import { VPList } from '../../components/molecules/VPList';
// CHILD 
import Header from './Components/Header';
// STYLE 
import Styles from './Style';
import { BAR_STYLE_DARK, WHITE } from '../../styles/colors';
// SAGA
import { fetchSearchProduct } from '../../redux/modules/product/action';
import { NoDataFound } from '../../components/molecules/NoDataFound';
import commonStyle from '../../styles/commonStyle';
import { VCart } from '../../components/atoms/VCart';
import { openBottomModal } from '../../redux/modules/bottomModal/actions';


export default function Search({ navigation, route }) {

    const dispatch = useDispatch(),
        { fetchSearchProductsPending, serachProducts } = useSelector(state => state.product),
        [products, setProducts] = useState(serachProducts?.length || [{}, {}, {}, {}, {}, {}, {}]),
        [keyboardVisible, setKeyboardVisible] = useState(false),
        [showAscOrder, setShowAscOrder] = useState(true),
        [viewVericalList, setViewVerticalList] = useState(true);

    useEffect(() => {
        // const keyboardDidShowListener = Keyboard.addListener(
        //     'keyboardDidShow',
        //     () => {
        //         setKeyboardVisible(true); // or some other action
        //     }
        // );
        // const keyboardDidHideListener = Keyboard.addListener(
        //     'keyboardDidHide',
        //     () => {
        //         setKeyboardVisible(false); // or some other action
        //     }
        // );
        // return () => {
        //     keyboardDidHideListener.remove();
        //     keyboardDidShowListener.remove();
        // };
    }, []);


    const getSearchProducts = (search = '', showAscOrder = true) => {
        const onSuccess = ({ data }) => setProducts(data)
        const onFail = (err) => { }
        dispatch(fetchSearchProduct({ data: { search, orderByName: showAscOrder ? "ASC" : "DESC" }, onSuccess, onFail }));
    }

    const toggleListView = () => setViewVerticalList(!viewVericalList)

    const toggleAscDescOrder = () => setShowAscOrder(!showAscOrder)

    const openFilterModal = () => dispatch(openBottomModal({ type: "Filter" }))

    return (
        <>
            <Header Styles={Styles} navigation={navigation} dispatch={dispatch} getSearchProducts={getSearchProducts} />
            <TheContainer container={Styles.theContainer} statusBarColor={WHITE} barStyle={BAR_STYLE_DARK} Tag={View}>
                {/* <PurifyHeader Styles={Styles} showAscOrder={showAscOrder} toggleAscDescOrder={toggleAscDescOrder} toggleListView={toggleListView} viewVericalList={viewVericalList} openFilterModal={openFilterModal} /> */}
                {/* <ActivePurifiers data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} Styles={Styles} /> */}
                {
                    products.length ?
                        viewVericalList ?
                            <VPList products={products} container={Styles.listContainer} startingSpace={true} loading={fetchSearchProductsPending} onRefresh={getSearchProducts} />
                            :
                            <ScrollView>
                                <View style={[Styles.listContainer, commonStyle.fRow, commonStyle.flexWrap]}>
                                    {products.map((x, i) => <VCart product={x} key={i} container={Styles.vCartContainer} loading={fetchSearchProductsPending} />)}
                                </View>
                            </ScrollView>
                        : (!fetchSearchProductsPending && !products.length) && <NoDataFound text={"Sorry, no matched product found in warehouse!"} />
                }
            </TheContainer>
            {/* {keyboardVisible ? <></> : <TheBottomTab navigation={navigation} route={route} />} */}
        </>
    )
}

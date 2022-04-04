import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
// COMPONENTS
import { Section } from '../../../components/molecules/Section';
import { SkeletonLoader } from '../../../components/atoms/SkeletonLoader'
// REDUX
import { fetchAllCategories } from '../../../redux/modules/category/action';
import { config } from '../../../utils/apiConfig';
import { errorMessage, Localize } from '../../../utils/common';


export default function Categories({ Styles, dispatch, navigation, refresh }) {

    const [categories, setCategories] = useState([]),
        { fetchAllCategoriesPending } = useSelector(state => state.category)

    useEffect(() => {
        refresh && getCategories();
    }, [refresh])

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {
        const onSuccess = ({ data }) => setCategories(data)
        const onFail = ({ message }) => errorMessage(message)
        dispatch(fetchAllCategories({ onSuccess, onFail }))
    }

    const _renderItem = ({ item, index }) => {
        return fetchAllCategoriesPending ?
            <SkeletonLoader container={[Styles.category, , index === 0 && { marginLeft: 15 }]} linearContainer={Styles.categoryImageBox} width={Styles.categoryImageBox.width} />
            : <TouchableOpacity
                style={[Styles.category, index === 0 && { marginLeft: 15 }]}
                key={index}
                onPress={() => {
                    navigation.navigate('CategoryProducts', {
                        id: item.id,
                        name: item.name
                    })
                }}
            >
                <View style={Styles.categoryImageBox}>
                    <Image style={Styles.categoryImage} source={{ uri: config.BASE_URL + "/" + item.thumbImage }} />
                </View>
                <Text style={Styles.categoryText}>{Localize(item.name)}</Text>
            </TouchableOpacity>
    }

    return (
        <Section>
            <View style={[Styles.categoryContainer]}>
                <FlatList
                    horizontal={true}
                    data={!fetchAllCategoriesPending ? categories : [1, 2, 3, 4, 5]}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </Section>
    )
}
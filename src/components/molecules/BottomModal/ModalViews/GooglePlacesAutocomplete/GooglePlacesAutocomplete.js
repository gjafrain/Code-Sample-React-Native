import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { PRIMARY } from '../../../../../styles/colors';
import { config } from '../../../../../utils/apiConfig';
import { deliveryRadious, distance, errorMessage } from '../../../../../utils/common';
// 
import { Icon } from '../../../../atoms/Icon';
import Styles from './Style';


export default function GooglePlacesAutocomplete({ onClose, callBack }) {

    const [searchText, setSearchText] = useState(''),
        [loading, loadingSet] = useState(false),
        [loadingLatLng, loadingLatLngSet] = useState(false),
        [deliveryUnavilable, deliveryUnavilableSet] = useState(false),
        [searchResultList, searchResultListSet] = useState([]),
        timeOutRef = useRef(null);

    useEffect(() => {
        timeOutRef.current && clearTimeout(timeOutRef.current)
        if (searchText?.length > 3 && !deliveryUnavilable) timeOutRef.current = setTimeout(() => getQueryAutoCompletePlace(searchText), 1000);
    }, [searchText])

    const getQueryAutoCompletePlace = (text) => {
        loadingSet(true)
        axios.get(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${text}&fields=(geometry,terms,place_id)&country=(in)&types=(cities)&key=${config.GOOGLE_MAP_API_KEY}&limit=5`).then(res => {
            console.log('res....', res)
            searchResultListSet(res.data?.predictions || []);
            loadingSet(false)
        }).catch(err => {
            loadingSet(false);
        })
    }

    const onChangeText = (text) => {
        deliveryUnavilable && deliveryUnavilableSet(false)
        setSearchText(text)
    };

    const handleClickAddress = (location) => {
        loadingLatLngSet(true)
        setSearchText(location.description)
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${location.place_id}&fields=geometry&key=${config.GOOGLE_MAP_API_KEY}`).then(res => {
            searchResultListSet([])
            const location = res.data?.result?.geometry?.location || {}
            const radious = distance(location.lat, location.lng);
            
            if (radious <= deliveryRadious) deliveryUnavilableSet(true);
            else {
                onClose()
                callBack({ location })
            }
            loadingLatLngSet(false)
        }).catch(err => loadingLatLngSet(false))
    };

    return (
        <View style={Styles.formContainer}>
            <View style={Styles.autoCompleteWrapper}>
                <View style={Styles.inputSearchContainer}>
                    <Icon name={'Back'} size={'md'} container={Styles.backIconContainer} onPress={onClose} />
                    <TextInput style={Styles.inputSearch} autoFocus={true} value={searchText} onChangeText={onChangeText} placeholder="Search for delivery location" placeholderTextColor='lightgrey' />
                    {<Icon name={'Cross'} size={'xs'} container={Styles.crossIconContainer} onPress={() => setSearchText('')} loader={loading || loadingLatLng} loaderColor={PRIMARY} />}
                </View>
                {
                    !deliveryUnavilable
                        ? <>
                            <View style={Styles.currentLocationMarker}>
                                <Icon name="CurrentLocation" imageStyle={Styles.currentLocationImageStyle} />
                                <Text style={Styles.currentLocationText}>Use my current location</Text>
                            </View>
                            <View style={Styles.locationsListWrapper}>
                                {
                                    searchResultList.map((location, i) => {
                                        return (
                                            <TouchableOpacity style={Styles.locationWrapper} key={i} onPress={() => handleClickAddress(location)}>
                                                <Icon name='LocationPin' />
                                                <View style={Styles.locationTextWrapper}>
                                                    <Text>{location?.structured_formatting?.main_text}</Text>
                                                    <Text style={Styles.subText}>{location?.structured_formatting?.secondary_text}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </>
                        : <View style={Styles.deliveryErrorWrapper}>
                            <Text style={Styles.errorMainText}>
                                Sorry, we didn't deliver in this locality
                            </Text>
                            <Text style={Styles.errorSubText}>
                                For now we just deliver in Karnal City.
                            </Text>
                        </View>
                }
            </View>
        </View>
    );
}

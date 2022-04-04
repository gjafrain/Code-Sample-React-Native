/** @format */

import React, { useState, useEffect, useRef } from "react"
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
    Image,
} from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE, AnimatedRegion } from "react-native-maps"
import { useDispatch, useSelector } from "react-redux"
import Geolocation from "react-native-geolocation-service"
//
import { Button } from "../../../components/atoms/Button"
import { CustomInput } from "../../../components/atoms/CustomInput"
import { Icon } from "../../../components/atoms/Icon"
import { TheContainer } from "../../../components/molecules/TheContainer"
//
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from "../../../styles/colors"
import { deliveryRadious, distance, errorMessage } from "../../../utils/common"
//
import LocationMarker from "../../../assets/icons/location-pin.png"
import { openBottomModal } from "../../../redux/modules/bottomModal/actions"
import { config } from "../../../utils/apiConfig"
import axios from "axios"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../styles/mixins"


const latitudeDelta = 0.0015
const longitudeDelta = latitudeDelta * (WINDOW_WIDTH / WINDOW_HEIGHT)

navigator.geolocation = require("react-native-geolocation-service")

export default function Form({ Styles, address = {} }) {
    const dispatch = useDispatch(),
        mapRef = useRef(null),
        watchIdRef = useRef(null),
        [pinnedAddress, pinnedAddressSet] = useState(null),
        [deliveryUnavilable, deliveryUnavilableSet] = useState(false),
        [loadingPinnedAddress, loadingPinnedAddressSet] = useState(false),
        [coordinate, coordinateSet] = useState({}),
        [grantedPermission, grantedPermissionSet] = useState(0)

    useEffect(() => {
        if (address.id) {
            if (address.latitude && address.longitude) {
                const addressLocation = {
                    ...coordinate,
                    latitude: address.latitude,
                    longitude: address.longitude,
                }

                mapRef?.current?.animateToRegion(addressLocation) // updateMap
                coordinateSet((prevState) => ({
                    ...prevState,
                    latitude: address.latitude,
                    longitude: address.longitude,
                }))
                grantedPermissionSet(1)
            } else {
                grantedPermissionSet(-1)
            }
        }
    }, [address])

    useEffect(() => {
        getPermision()
        return () =>
            watchIdRef?.current ? Geolocation.clearWatch(watchIdRef.current) : null
    }, [])

    const getPermision = async () => {
        var granted = ""
        try {
            if (Platform.OS.toLowerCase() === "ios") {
                granted = await Geolocation.requestAuthorization("whenInUse")
            } else {
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Access Required",
                        message:
                            "Farmer Buggy needs to Access your location, it will help us to  delivery your order",
                    }
                )
            }
            if (granted == "granted") {
                grantedPermissionSet(1)
                if (!address.latitude || !address.longitude) {
                    getCurrentLocation()
                }
            } else {
                grantedPermissionSet(-1)
                errorMessage("Permission Denied")
            }
        } catch (err) {
            console.warn(err)
            grantedPermissionSet(-1)
        }
    }

    const getCurrentLocation = () => {

        watchIdRef.current = Geolocation.getCurrentPosition(
            (position) => {
                //getting the Longitude from the location json
                const { latitude, longitude } = position.coords,
                    cuttonLocation = {
                        ...coordinate,
                        latitude,
                        longitude,
                    }
                coordinateSet((prevState) => ({
                    ...prevState,
                    latitude,
                    longitude,
                }))
                getPlaceInfo(latitude, longitude)
                mapRef?.current?.animateToRegion(cuttonLocation) // updateMap
            },
            (error) => {
                console.log("error.....", error)
                errorMessage(error.message)
                grantedPermissionSet(-1)
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                // maximumAge: 1000
            }
        )
    }

    const handleSave = () => {
        dispatch(
            openBottomModal({
                type: "AddressFormModalView",
                data: { coordinate, address, pinnedAddress },
            })
        )
    }

    const getPlaceInfo = (lat, lng) => {
        !loadingPinnedAddress && loadingPinnedAddressSet(true)

        if (distance(lat, lng) > deliveryRadious) {
            !deliveryUnavilable && deliveryUnavilableSet(true)
            pinnedAddressSet(null)
            loadingPinnedAddressSet(false)
            return true
        } else deliveryUnavilable && deliveryUnavilableSet(false)

        axios.get(
            `${config.GOOGLE_MAP_API}geocode/json?latlng=${lat},${lng}&radious=100&limit=1&key=${config.GOOGLE_MAP_API_KEY}`
        )
            .then((res) => {
                pinnedAddressSet(res?.data?.results[0] || null)
                loadingPinnedAddressSet(false)
            })
            .catch((err) => {
                loadingPinnedAddressSet(false)
                errorMessage(err?.message)
            })
    }

    const handleChangeLocation = () => {
        dispatch(
            openBottomModal({
                type: "GooglePlacesAutocomplete",
                callBack: changedLocationCallBack,
            })
        )
    }

    const changedLocationCallBack = ({ location }) => {
        location = {
            ...coordinate,
            latitude: location.lat,
            longitude: location.lng,
        }
        mapRef?.current?.animateToRegion(cuttonLocation) // updateMap
        coordinateSet(location)
        getPlaceInfo(location.lat, location.lng)
    }

    const onRegionChangeComplete = (coordinate) => {
        // coordinateSet(coordinate)
        console.log('onRegionChangeComplete ....',onRegionChangeComplete)
        getPlaceInfo(coordinate.latitude, coordinate.longitude)
    }
    const onRegionChange = (coordinate) => {
        coordinateSet(coordinate)
    }

    return (
        <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT}>
            {grantedPermission === -1 ||
                (grantedPermission === 1 && coordinate.longitude && coordinate.latitude) && (
                    <>
                        <View style={Styles.mapWrapper}>
                            <MapView
                                mapType={"standard"}
                                ref={mapRef}
                                minZoomLevel={6}
                                maxZoomLevel={28}
                                showsMyLocationButton={true}
                                style={Styles.mapContaier}
                                initialRegion={{
                                    latitude: 29.7014,
                                    longitude: 76.990547,
                                    ...coordinate,
                                    latitudeDelta,
                                    longitudeDelta,
                                }}
                                onRegionChangeComplete={onRegionChangeComplete}
                                // customMapStyle={mapStyle}
                                onRegionChange={onRegionChange}
                            // enablePoweredByContainer={false}
                            // provider={PROVIDER_GOOGLE}
                            >
                                {coordinate.latitude && coordinate.longitude && (
                                    <Marker.Animated
                                        coordinate={coordinate}
                                    >
                                        <Image source={LocationMarker} style={Styles.marker} />
                                    </Marker.Animated>
                                )}
                            </MapView>
                            {deliveryUnavilable && (
                                <View style={Styles.notDeliveryAreaMsg}>
                                    <Text style={Styles.errorText}>
                                        Sorry, we didn't deliver here
                                    </Text>
                                </View>
                            )}
                        </View>
                        <View style={Styles.mapWrapperLocation}>
                            <Icon name='CurrentLocation' size='md' />
                            {loadingPinnedAddress ? (
                                <View style={Styles.loadingAddress}>
                                    <Icon loader loaderColor={PRIMARY} />
                                </View>
                            ) : deliveryUnavilable ? (
                                <></>
                            ) : (
                                <View style={Styles.locationInfo}>
                                    <View style={Styles.housePlotNumber}>
                                        <Text>
                                            {pinnedAddress?.address_components[0]?.long_name}
                                        </Text>
                                    </View>
                                    <View style={Styles.address}>
                                        {pinnedAddress?.address_components?.map((x, i) => {
                                            if (!i) return
                                            return (
                                                <Text style={Styles.subText} key={i}>
                                                    {x.long_name}
                                                    {pinnedAddress.address_components.length !== i + 1
                                                        ? ", "
                                                        : ""}
                                                </Text>
                                            )
                                        })}
                                    </View>
                                </View>
                            )}
                        </View>

                        <View style={[Styles.saveBtnWrapper]}>
                            <Button
                                icon={"RightArrow"}
                                label='Confirm Location & Proceed'
                                disable={deliveryUnavilable}
                                onPress={handleSave}
                            />
                        </View>
                    </>
                )}
        </TheContainer>
    )
}

const mapStyle = [
    // {
    //     elementType: "labels",
    //     stylers: [
    //         {
    //             visibility: "off"
    //         }
    //     ]
    // },
    // {
    //     featureType: "administrative.land_parcel",
    //     stylers: [
    //         {
    //             visibility: "off"
    //         }
    //     ]
    // },
    // {
    //     featureType: "administrative.neighborhood",
    //     stylers: [
    //         {
    //             visibility: "off"
    //         }
    //     ]
    // }
]

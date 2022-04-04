import React from "react";
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from "react-redux";
// 
import { sliderWidth, itemWidth, WINDOW_WIDTH } from '../../../styles/mixins'
// IMAGES
import slider1 from '../../../assets/images/banner1.png';
import slider2 from '../../../assets/images/banner2.png';
import slider3 from '../../../assets/images/banner3.png';
import { SkeletonLoader } from "../../../components/atoms/SkeletonLoader";

export default function Slider({ Styles }) {

    const { fetchAllCategoriesPending } = useSelector(state => state.category),
        data = [
            slider1,
            slider2,
            slider3,
        ];

    const _renderItem = ({ item, index }) => {
        return <View style={Styles.slide} key={index}>
            <Image source={item} style={{ ...Styles.sliderImage, width: itemWidth }} />
        </View>
    }

    return (
        <View style={Styles.sliderContainer}>
            {fetchAllCategoriesPending ?
                <SkeletonLoader container={Styles.sliderLoadingContainer} linearContainer={Styles.sliderLinearLoadingContainer} width={Styles.sliderLinearLoadingContainer.width} />
                :
                <Carousel
                    containerCustomStyle={Styles.carouselStyle}
                    enableSnap={true}
                    activeSlideAlignment={'center'}
                    activeAnimationType='spring'
                    loop={true}
                    autoplay={true}
                    autoplayDelay={9000}
                    autoplayInterval={6000}
                    inactiveSlideOpacity={.6}
                    inactiveSlideScale={.9}
                    data={data}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            }
        </View>
    )
}
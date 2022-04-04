import { View, Text, Modal, Pressable, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
//
import ThanksBack from '../../../assets/images/thanks-back.png';
import Thankyou from '../../../assets/images/logo.png';
//
import Styles from './Style';
import styles from '../../atoms/SkeletonLoader/Style';

export default function LanguageOptionModal({ show, setLanguage }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => { }}
        >
            <View style={Styles.centeredView}>
                <View style={Styles.modalView}>
                    <ImageBackground
                        style={Styles.modalBackgroundView}
                        source={ThanksBack}
                    >
                        <View style={Styles.headerWrapper} />
                        <View style={Styles.logoImageWrapper}>
                            <Image
                                style={Styles.logoImage}
                                source={Thankyou}
                            />
                        </View>
                        <View style={Styles.body}>
                            <Text style={Styles.welcomeText}>Choose your buggy's language </Text>
                            <View style={Styles.optionHeader}>
                                <TouchableOpacity
                                    style={Styles.option}
                                    onPress={() => setLanguage('hn')}
                                >
                                    <Text style={Styles.optionText}>हिन्दी</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[Styles.option, Styles.engOption]}
                                    onPress={() => setLanguage('en')}
                                >
                                    <Text style={Styles.optionText}>English</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </Modal >

    );
}

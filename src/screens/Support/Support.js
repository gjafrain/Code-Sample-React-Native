import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from '../../components/atoms/Icon';
import { TheContainer } from '../../components/molecules/TheContainer';
import { TheHeader } from '../../components/molecules/TheHeader';
import { openBottomModal } from '../../redux/modules/bottomModal/actions';
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../styles/colors';
//
import Styles from './Style';

export default function Support({ navigation }) {

    const dispatch = useDispatch();

    const handlePressOption = (type, title) => {
        dispatch(openBottomModal({ type: 'SupportFormModalView', data: { type, title } }))
    }

    return (
        <>
            <TheHeader
                navigation={navigation} title='Support'
                backIcon={true} backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                container={Styles.header}
                showBasketIcon={false}
                container={Styles.header}
                showStatusBar
            />
            <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT}>
                <ScrollView >
                    <View style={Styles.options}>
                        <TouchableOpacity style={Styles.option} onPress={() => handlePressOption('Bug', 'Report a bug')}>
                            <Icon name="Bug" size='xxxxll' imageStyle={Styles.iconImage} />
                            <View style={Styles.optionTextWrapper}>
                                <Text style={Styles.title}>Report a bug</Text>
                                <Text style={Styles.subText}>Let us know what's broken.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.option} onPress={() => handlePressOption('Feature', 'Feature request')}>
                            <Icon name="FeatureRequest" size='xxxxll' imageStyle={Styles.iconImage} />
                            <View style={Styles.optionTextWrapper}>
                                <Text style={Styles.title}>Feature request</Text>
                                <Text style={Styles.subText}>Tell us how can we improve.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.option} onPress={() => handlePressOption('Feedback', 'General Feedback')}>
                            <Icon name="Feedback" size='xxxxll' imageStyle={Styles.iconImage} />
                            <View style={Styles.optionTextWrapper}>
                                <Text style={Styles.title}>General Feedback</Text>
                                <Text style={Styles.subText}>Give general feedback.</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TheContainer>
        </>
    )
}

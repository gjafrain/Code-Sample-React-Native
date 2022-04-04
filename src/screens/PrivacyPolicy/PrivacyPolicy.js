import React from 'react';
import { WebView } from 'react-native-webview';

export default function PrivacyPolicy() {
    return <WebView source={{ uri: 'https://farmerbuggy.com/privacyPolicy' }} />;
}
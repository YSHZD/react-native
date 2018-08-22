import React from 'react';
import { SectionList, FlatList, ScrollView, Button, Alert, Text, View, Image, Platform, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
export default class UserView extends React.Component {
    static navigationOptions = {
        title: 'welcome'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text onPress = { ()=> navigate('Home')}>UserView</Text>
            </View>
        )
    }
}
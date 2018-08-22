import React from 'react';
import { Animated, SectionList, FlatList, ScrollView, Button, Alert, Text, View, Image, Platform, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }
    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={{
                ...this.props.style,
                opacity: fadeAnim,
            }}>
            {this.props.children}
            </Animated.View>
        )
    }
}
export default class HomeView extends React.Component {
    constructor(props){
        super(props);
        console.warn('ysh')
    }
    static navigationOptions = {
        title: 'welcome'
    };
   
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>2018 YSH</Text>
                <Button onPress={() => navigate('User')} 
                title="here"
                />
                <FadeInView style={{ width: 300, height: 50, backgroundColor: '#ededed' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}

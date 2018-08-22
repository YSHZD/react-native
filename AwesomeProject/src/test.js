import React, { Component } from 'react';
import { SectionList, FlatList, ScrollView, Button, Alert, Text, View, Image, Platform, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigation } from 'react-navigation'
class Ysh extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        )
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
        setInterval(() => {
            this.setState(states => {
                return { showText: !states.showText }
            })
        }, 1000)
    }
    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        )
    }
}
let REQUEST_URL =
    "https:\/\/raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loaded: false
        }; 
    }

    fetchData() {
        fetch(REQUEST_URL).then((response) => response.json()).then(
            (responseData) => {
                this.setState({
                    loaded: true,
                    movies: this.state.movies.concat(responseData.movies),
                })
            }).catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadView()
        }
        return (
            <FlatList data={this.state.movies} renderItem={this.renderMovie} style={styles.list} />
        );
    }

    renderLoadView() {
        return (
            <View style={styles.container}>
                <Text>
                    加载中...
        </Text>
            </View>
        )
    }


    renderMovie({ item }) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: item.posters.thumbnail }} style={{ width: 50, height: 50 }} />
                <View style={styles.righttxt}>
                    <Text>{item.title}</Text>
                    <Text>{item.year}</Text>
                </View>
            </View>
        );
    }

}
/*

adb shell input keyevent 82 选择"Enable Live Reload"可以开启自动刷新


 console.error(Platform.Version)


基础组件 ：
View 

Text 文本

Image 图片

TextInput 文本输入

ScrollView 滚动视图

StyleSheet 样式抽象层

交互组件：

Button 按钮

Picker选择器控件

Slider 滑动数组选择器

Switch 开关

列表视图：

FlatList 高性能 滚动列表组件

SectionList 多了分组显示

ios独有组件和api

ActionSheetIOS 弹出框选择菜单 分享菜单

AlertIOS 

DatePickerIOS

ImagePickerIOS

NavigatorIOS

ProgressViewIOS

PushNotificationIOS

SegmentControlIOS

TabBarIOS

安卓独有的组件和api

BackHandler

DatePickerAndroid

DrawerLayoutAndroid

PermissionsAndroid

ProgressBarAndroid

TimePickerAndroid

ToastAndroid

ToolbarAndroid

ViewPagerAndroid

其它 

ActivityIndicator

Alert

Animated

CameraRoll

Clipboard

Dimensions

KeyboardAvoidingView

Linking

Modal

PixelRatio

RefreshControl

StatusBar

WebView


<View style={styles.container}>
        <Image source={{uri:movie.posters.thumbnail}} style={{width:50,height:50}} />
        <View style={styles.righttxt}>
          <Text>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
  constructor(props) {
    super(props);
    this.state = {text:''}
  }
  componentDidMount() {

  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render() {
    let img = {
      uri:'http:\/\/n.sinaimg.cn/sinacn14/8/w640h968/20180512/3f43-hamfahx0173379.jpg'
    }
    return (
        <View style={styles.box}>
          <View style={styles.item1}>
            <SectionList 
              sections={[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
              renderItem = {({item}) => <Text>{item}</Text>}
              renderSectionHeader={({section}) => <Text>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
          <View style={styles.item2}>
             <View style = {styles.smallbox}><Text style = {styles.cf}>1</Text></View>
             <View style = {styles.smallbox}><Text style = {styles.cf}>2</Text></View>
             <View style = {styles.smallbox}><Text style = {styles.cf}>3</Text></View>
          </View>
          <View style={styles.item3}>
             <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
              </TouchableHighlight>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
              </TouchableOpacity>

              <TouchableWithoutFeedback onPress={this._onPressButton}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
              </View>
              </TouchableWithoutFeedback>

              <TouchableNativeFeedback onPress={this._onPressButton}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
              </View>
              </TouchableNativeFeedback>

          </View>
        </View>
      );
  }


var xhr = new XMLHttpRequest();
    xhr.open('GET','https:\/\/facebook.github.io/react-native/movies.json');
    xhr.onreadystatechange = e => {
      if(xhr.readyState == 4 && xhr.status==200){
        console.error(xhr.responseText)
      }
    };
    xhr.send();


fetch('https:\/\/facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        console.error(responseJson);
        console.error('*****')

      })
      .catch((error) =>{
        console.error(error);
      });


<FlatList
            data = {[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={{color:'white'}}>{item.key}</Text>}
            />

<ScrollView>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
            </ScrollView>
<Button onPress = {() => {
              Alert.alert('点击了')
            }} title="点我"></Button>
<TextInput style={{height:40,flex:1,flexDirection:'row'}} placeholder="input here" 
             onChangeText = {(text) => this.setState({text})}
            />
            <Text style={{padding:10,fontSize:40 ,flex:1,flexDirection:'row'}}>
              {this.state.text}
            </Text>
<View style={{alignItems:'center'}}>
          <Ysh  name="ysh"/>
          <Ysh  name="love"/>
          <Ysh  name="you"/>
        </View>
        <Text style={[styles.red, styles.fize]}>ysh66666666666</Text>
//<Blink text="I love you ..."/>
//<Image source = {img} style={{width:400,height:500}}/>

flexDirection  默认值是 colum (row)
flex 只能指定一个数字
alignItems
justifyContent


*/

const styles = StyleSheet.create({
    list: {
        paddingTop: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                backgroundColor: 'pink'
            },
            android: {
                backgroundColor: '#ededed'
            }
        })
    },
    righttxt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        flex: 1
    },
    item1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    cf: {
        color: '#ffffff',
        fontSize: 40
    },
    smallbox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'pink'
    },
    item3: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    red: {
        color: 'red',
    },
    fize: {
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        width: 200,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }
})
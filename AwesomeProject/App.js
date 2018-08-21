import React,{ Component} from 'react';
import { Text, View, Image} from 'react-native';

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
        return { showText: !states.showText}
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

export default class HelloWorldApp extends Component{
  render() {
    let img = {
      uri:'http:\/\/n.sinaimg.cn/sinacn14/8/w640h968/20180512/3f43-hamfahx0173379.jpg'
    }
    return (
      <View>
        <View style={{alignItems:'center'}}>
          <Ysh name="ysh"/>
          <Ysh name="love"/>
          <Ysh name="you"/>
          <Blink text="I love you"/>
        </View>
        <Image source = {img} style={{width:400,height:500}}/>
      </View>
      );
  }
}
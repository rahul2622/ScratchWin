import React from 'react';
import { StyleSheet,Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class App extends React.Component {
constructor(props){
super(props);
this.state = {
  isLoading: true
}
}



async componentWillMount(){
   await Expo.Font.loadAsync({
     Roboto: require("native_base/Fonts/Roboto.ttf "),
     Roboto_medium:require("native_base/Fonts/Roboto_medium.ttf"),
   })
   this.setState({isLoading: false})
 }


  render() {
    if (this.state.isLoading){
    return <Expo.AppLoading / >
    }
  return (
    <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}}


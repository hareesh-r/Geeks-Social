import React,{Component} from 'react';
import { StyleSheet,Image,ImageBackground,TouchableOpacity,Text, View } from 'react-native';

class LoginScreen extends Component {
    state = {}
    
    render() {
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            },
            container1: {
                // flex: 1,
                alignItems: 'center',
                padding:20
                // justifyContent: 'center',
              },
            image: {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            },
            title: {
                alignItems: 'center',
                fontSize: 50,
                fontWeight: 700,
                color:'white'
            },
            loginButtonGoogle: {
                elevation: 8,
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                width: 170,
                marginTop:-50,
                marginBottom:20,
                paddingVertical: 10,
                paddingHorizontal: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            loginButtonFacebook: {
                elevation: 8,
                backgroundColor: "#3b5998",
                borderRadius: 10,
                marginBottom:20,
                width: 170,
                paddingVertical: 10,
                paddingHorizontal: 12,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            loginButtonApple: {
                elevation: 8,
                backgroundColor: "#000000",
                borderRadius: 10,
                marginBottom:20,
                width: 170,
                paddingVertical: 10,
                paddingHorizontal: 12,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            loginTextGoogle: {
                color: 'black',
                paddingLeft:10,
            },
            loginTextFacebook: {
                color: 'white'
            },
            loginTextApple: {
                color: 'white',
                paddingLeft:10,
            },
            logo: {
                width: 20,
                height: 20,
            }

          });
        return (
            <ImageBackground style={styles.image} source={{ uri: 'https://wallpapercave.com/wp/wp4071233.jpg' }}>
                <View style={styles.container1}>
                    <Text style={styles.title}>The Eco Crew</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.loginButtonGoogle} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.loginTextGoogle}>Login with Google</Text>
                        <Image style={styles.logo} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuoKGScAHkMXYEpDAOr4y3zPJz3Kura9TesWte2ueTAIGdyeP5KVwq-0Q8BobSm-iaqs&usqp=CAU'}}/>
                    </TouchableOpacity>
                    <View></View>
                    <TouchableOpacity style={styles.loginButtonFacebook} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.loginTextFacebook}>Login with Facebook</Text>
                        <Image style={styles.logo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButtonApple} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.loginTextApple}>Login with Apple</Text>
                        <Image style={styles.logo} source={{uri:'data:image/png;base64,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'}}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
         );
    }
}


 
export default LoginScreen;
import React,{ Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import EmailAndPassWord from './EmailAndPassword';
import Loading from './Loading';
import SignInForm from './SignInForm';


class Choose extends Component{

    state={
        choice:null
    }

    loginPress = () => {
        this.setState({choice: true,})
    }

    registerPress = () => {
        this.setState({choice: false,})
    }

    renderContent = () =>{
        switch(this.state.choice){
            case true:
                return <EmailAndPassWord/>


            case false:
                return <SignInForm/>

                default:
                    return <Loading/>
        }
    }

    render(){
        return(
        <View>
            <TouchableOpacity  onPress={this.loginPress}>
                <Text > Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.registerPress} >
                <Text > Sign Up </Text>
            </TouchableOpacity>
            {this.renderContent()}
        </View>
        );
    }
}

export default Choose;
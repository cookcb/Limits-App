import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Picker,
  Button
} from 'react-native';

export default class ViewLimit extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    addExpense(){

    }

    render(){
        console.log(this.props.navigation.state.params);
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View>
                        <Text>{this.props.navigation.state.params.limit.name}</Text>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 100,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    }
});
import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

export default class AddExpense extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            date: ""
        }
    }

    render(){
        return(
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Amount"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date"
                />
            </View>
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
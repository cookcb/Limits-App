import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  DatePickerIOS,
  TouchableOpacity
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ViewLimit extends Component {
    constructor(props){
        super(props);
        this.state = {
            cost: 0,
            date: new Date(),
            showDatePicker: false
        }

        this.changeDate = this.changeDate.bind(this);
    }

    addExpense(){
        let limitId = this.props.navigation.state.params.limit[0].id;
        this.props.navigation.state.params.addExpense(limitId, cost, date);
    }

    changeDate(newDate){
        this.setState({date: newDate})
    }

    render(){
        let datePicker = this.state.showDatePicker ? 
            <View>    
                <DatePickerIOS
                date={this.state.date}
                onDateChange={this.changeDate}
                mode={'date'}
                /> 
            </View> : <View />
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View>
                        <Text>{this.props.navigation.state.params.limit[0].name}</Text>
                    </View>
                    <View>
                            <FlatList
                                data={this.props.navigation.state.params.limit[0].expenses}
                                renderItem={({item}) => (
                                    <TouchableHighlight onPress={() => {}}> 
                                        <View>
                                            <Text>{item.cost}</Text>
                                            <Text>{item.date}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={this.state.cost}
                            placeholder="Amount"
                        />
                    </View>
                    <View>          
                            <TextInput 
                                style={styles.input}
                                value={this.state.date}
                                placeholder="Date"
                                onFocus={() => this.setState({showDatePicker: !this.state.showDatePicker})}
                            />
                                <Text>{this.state.date.getDate()}</Text>
                            <TextInput/>
                            {datePicker}
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
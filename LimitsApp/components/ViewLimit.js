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
  Modal,
  Button
} from 'react-native';

export default class ViewLimit extends Component {
    constructor(props){
        super(props);
        this.state = {
            cost: 0,
            date: new Date(),
            showAddExpenseModal: false
        }

        this.addExpense = this.addExpense.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    addExpense(cost, date){
        let limitId = this.props.navigation.state.params.limit[0].id;
        this.props.navigation.state.params.addExpense(limitId, cost, date);
        this.setState({showAddExpenseModal: !this.state.showAddExpenseModal});
    }

    changeDate(newDate){
        this.setState({date: newDate})
    }

    render(){
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
                        <Button 
                            title="Add Expense"
                            accessibilityLabel="Button to create new expense"
                            onPress={() => this.setState({showAddExpenseModal: !this.state.showAddExpenseModal})}
                        />
                    </View>
                    <View style={{marginTop: 100}}>      
                        <Modal
                            animationType={'slide'}
                            transparent={false}
                            visible={this.state.showAddExpenseModal}
                        >
                            <View style={{marginTop: 100, width: 300, height: 300}}>
                                <Text>
                                    Add Expense
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.cost}
                                    placeholder="Amount"
                                 />
                                <DatePickerIOS
                                    date={this.state.date}
                                    onDateChange={this.changeDate}
                                    mode={'date'}
                                    /> 
                                <View>
                                    <Button 
                                        title="Add"
                                        accessibilityLabel="Button to create new Expense"
                                        onPress={() => this.addExpense(this.state.cost, this.state.date)}
                                    />
                                    <Button 
                                        title="Cancel"
                                        accessibilityLabel="Button to cancel adding an expense"
                                        onPress={() => this.setState({showAddExpenseModal: !this.state.showAddExpenseModal})}
                                    />
                                </View>
                            </View>
                        </Modal>
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
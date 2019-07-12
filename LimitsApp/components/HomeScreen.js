import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableHighlight
} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            limits: [
                {
                    name: "Groceries",
                    limit: 75,
                    currentSpending: 25,
                    resetRate: 'WEEKLY',
                    transactions: []
                },
                {
                    name: "Weekend",
                    limit: 40,
                    currentSpending: 25,
                    resetRate: 'WEEKLY',
                    transactions: []
                }
            ]
        }

        this.addLimit = this.addLimit.bind(this);
        this.deleteLimit = this.deleteLimit.bind(this);
    }

    addLimit(){

    }

    deleteLimit(){

    }

    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View>
                        <View>
                            <Text>
                                Limits
                            </Text>
                        </View>
                        <View>
                            <FlatList
                                data={this.state.limits}
                                renderItem={({item}) => (
                                    <TouchableHighlight onPress={() => {}}> 
                                        <View>
                                            <Text>{item.name}</Text>
                                            <Text>{item.limit}</Text>
                                            <Text>{item.currentSpending}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            />
                        </View>
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
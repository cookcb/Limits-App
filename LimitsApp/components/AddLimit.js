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
import { tsImportEqualsDeclaration } from '@babel/types';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            limit: "",
            resetRate: "",
            startDate: ""
        }

        this.addNewLimit = this.addNewLimit.bind(this)
    }

    addNewLimit(){
        let {name, limit, resetRate} = this.state;
        this.props.navigation.state.params.addLimit(name, limit, resetRate);
        this.props.navigation.goBack();
    }

    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View>
                        <Text>Add Limit</Text>
                    </View>
                    <View>
                        <Text>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name" 
                            value={this.state.name}
                            onChangeText={(text) => this.setState({name: text})}/>
                    </View>
                    <View>
                        <Text>Limit</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Limit Value"
                            keyboardType="numeric"
                            value={this.state.limit}
                            onChangeText={(text) => this.setState({limit: text})}>
                        </TextInput>
                    </View>
                    <View>
                        <Text>Reset Rate</Text>
                        <Picker>
                            <Picker.item label="Weekly" value="weekly"/>
                            <Picker.item label="Monthly" value="monthly"/>
                            <Picker.item label="Yearly" value="monthly"/>
                        </Picker>
                    </View>
                    {/* TODO - Add in start date for reset rate */}
                    <View>
                        <Button 
                            title="Add"
                            accessibilityLabel="Button to create new limit"
                            onPress={() => this.addNewLimit()}
                        />
                        <Button 
                            title="Cancel"
                            accessibilityLabel="Button to cancel creating new limit"
                            onPress={() => this.props.navigation.goBack()}
                        />
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
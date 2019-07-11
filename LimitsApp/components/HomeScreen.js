import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList
} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            limits: []
        }
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
                                  renderItem={({limit}) => <Text style={styles.item}>{item.key}</Text>}
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
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Home extends Component {
    render(){
        return (
            <View>
                <Text style={styles.title}>Name:</Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder="John Doe"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop:20,
        marginLeft:20,
        fontSize: 20
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin:20
    }
})
export default Home;
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
    static navigationOptions = {
        title: 'Chatter'
    }
    state = { name: '' }

    onPress = () => this.props.navigation.navigate('Chat', { name: this.state.name });

    onChangeText = name => this.setState({ name })
    
    render(){
        return (
            <View>
                <Text style={styles.title}>Name:</Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder="John Doe"
                    onChangeText={this.onChangeText}
                    value={this.state.name}
                />

                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
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
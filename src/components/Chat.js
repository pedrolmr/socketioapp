import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Chat extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat'
    })
    state = {
        messages: []
    }

    get user() {
        return {
            name: this.props.navigation.state.params.name,

        }
    }

    render() {
        return (
            <GiftedChat 
                messages={this.state.messages}
            />
        );
    }
}
export default Chat;
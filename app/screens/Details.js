import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Me extends Component {

  render() {
    const user = this.props.navigation.state.params;
    
    return (
      <View><Text>{user ? user.name : 'No name'}</Text></View>
    );
  }
}

export default Me;

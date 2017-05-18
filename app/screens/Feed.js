import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Feed extends Component {
  constructor() {
    super()
    this.state= {
      users: [{ name: 'Loading...', id: 1 }]
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( response => {
      this.setState({
        users: response
      })
    })
  }

  onPress(user) {
    this.props.navigation.navigate('Details', { ...user });
  }

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.users.map((user) => (
            <ListItem
              key={user.id}
              title={`${user.name.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onPress(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;

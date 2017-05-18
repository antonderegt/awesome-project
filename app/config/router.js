import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Details from '../screens/Details';

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed
  },
  Details: {
    screen: Details
  },
});

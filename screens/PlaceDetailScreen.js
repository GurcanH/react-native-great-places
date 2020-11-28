import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlacesDetailScreen = props => {
  return (
    <View>
      <Text>PlacesDetailScreen</Text>
    </View>
  );
};

PlacesDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('place').title
  };
};

const styles = StyleSheet.create({});

export default PlacesDetailScreen;

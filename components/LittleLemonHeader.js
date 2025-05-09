import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { View, Text } from 'react-native';


export default function LittleLemonHeader() {
  return (
    <View style={GlobalStyles.headerContainer}>
      <Text style={GlobalStyles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
};
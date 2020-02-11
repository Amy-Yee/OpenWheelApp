import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Spinner from 'react-native-number-spinner';

export default function App() {
  return (
    <View>
        <Header
          centerComponent={{ text: 'OpenWheel', style:{color: '#fff'} }}
        />

      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <View style={styles.valueSelector}>
          <Text>Proportional</Text>
          <Spinner/>
          <Spinner/>
          <Spinner/>
        </View> 
      
      </View>
             
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueSelector: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

  

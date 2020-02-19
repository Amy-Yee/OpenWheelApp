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

        <Text style={{color:'#ffdead'}}>Ride statistics coming soon</Text>
        <View style={styles.valueSelector}>
          <Text>Proportional</Text>
          <Spinner onNumChange={(event) => {
            porportional = proportional*event;
            console.log("Proportional: ", proportional);
          }}/>
        </View> 
        <View style={styles.valueSelector}>
          <Text>Integral</Text>
          <Spinner/>
        </View>
        <View style={styles.valueSelector}>
          <Text>Derivative</Text>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '1em',
  },
});

  

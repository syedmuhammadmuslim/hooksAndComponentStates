/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const [getFirstName, setFirstName] = useState('First Name Here!');
  const [getLastName, setLastName] = useState('Last Name Here!');

  const [getNames, setNames] = useState({
    fName: 'First Name Here!!',
    lName: 'Last Name Here!!',
  });

  const buttonPressed = msg => {
    alert('Hi from ' + msg);
  };

  const updateFirstName = name => {
    // fName = name;
    // setFirstName(name);
    // alert(fName);
    setNames({fName: name, lName: getNames.lName});
  };

  // let fName = 'Muhammad';
  // let lName = 'Muslim';

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          {
            /*fName*/
            /*getFirstName*/
            getNames.fName
          }
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          {
            /* lName*/
            /*getLastName*/
            getNames.lName
          }
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10}}>
          <Button
            title="Update First Name"
            onPress={updateFirstName.bind(this, 'Muhammad')}
          />
        </View>
        <View style={{padding: 10}}>
          <Button
            title="Update Last Name"
            onPress={
              // /*buttonPressed.bind(this, 'Doe')*/ () => setLastName('Doe')
              () => setNames({fName: getNames.fName, lName: 'Muslim'})
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 30,
    color: 'ffffff',
  },
  text: {
    fontSize: 30,
    color: '#654321',
  },
});

export default App;

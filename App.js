/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';

class Age extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 25,
    };
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          justifyContent: 'center',
          padding: '3%',
        }}>
        <View style={{flex: 1, padding: '3%'}}>
          <Text style={styles.text}>Age</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '3%',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Button
              title="-"
              onPress={() => {
                if (this.state.age == 0) {
                  alert('Age cannot be less than 0');
                } else {
                  this.setState({age: this.state.age - 1});
                }
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.text}>{this.state.age}</Text>
          </View>
          <View style={{flex: 1}}>
            <Button
              title="+"
              onPress={() => {
                if (this.state.age == 99) {
                  alert('Age cannot be bigger than 99');
                } else {
                  this.setState({age: this.state.age + 1});
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

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
    // Upper lines are step by step
    setNames({fName: name, lName: getNames.lName});
  };

  const updateNumber = num => {
    if (getInput == 'Enter Number') {
      setInput(num);
    } else {
      setInput(getInput + num);
    }
  };

  // let fName = 'Muhammad';
  // let lName = 'Muslim';
  const [getInput, setInput] = useState('Enter Number');

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
      <Age />
      <View style={{flexDirection: 'column', width: '100%'}}>
        <View style={{backgroundColor: 'grey'}}>
          <Text
            style={{
              fontSize: 30,
              color: '#ffffff',
              // textAlignVertical: 'center',
              textAlign: 'right',
              paddingRight: '3%',
              paddingLeft: '3%',
            }}>
            {getInput}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Button title="1" onPress={updateNumber.bind(this, '1')}></Button>
          </View>
          <View style={{flex: 1}}>
            <Button title="2" onPress={updateNumber.bind(this, '2')}></Button>
          </View>
          <View style={{flex: 1}}>
            <Button title="3" onPress={updateNumber.bind(this, '3')}></Button>
          </View>
          <View style={{flex: 1}}>
            <Button title="4" onPress={updateNumber.bind(this, '4')}></Button>
          </View>
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
    padding: '2%',
  },
  text: {
    fontSize: 30,
    color: '#654321',
    // textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default App;

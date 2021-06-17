import React, {useState} from 'react';
import {Text, SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

import axios from 'axios';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const BackAction = () => (
    <TopNavigationAction icon={BackIcon} />
);

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  let [count, setCount] = useState(0); 
  let [statusCode, setStatusCode] = useState(0); 
  let [descri, setDesc] = useState(""); 
   
  const increment = () => setCount(count + 1);
  const addChar = (click) => {
    setDesc(descri + "A")
  }; 
  const getFromApiAsync = async () => {
    try {
      console.log("getFromApiAsync <------call-------")
      const index=1
      let response = await axios.get(`https://swapi.dev/api/people/${index}/`)
      setStatusCode(response.status)            
      console.log(response.data);
    } catch (error) {
      setStatusCode(response.status)
      console.error(error);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Axios: {statusCode}</Text>
        <Button onPress={getFromApiAsync}>Get Code</Button>
        <Text>val={count}</Text>
        <Button onPress={increment}>increment</Button>
        <Text>texto={descri}</Text>
        <Button onPress={addChar}>Add "A"</Button>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};
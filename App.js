import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Amplify, {Auth} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import config from './src/aws-exports'

Amplify.configure(config);


const App = () => {
  Auth.signOut();
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default withAuthenticator(App);
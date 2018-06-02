import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconUI from "./IconUI";

export default class App extends React.Component {

  render() {
    return (
          <IconUI />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


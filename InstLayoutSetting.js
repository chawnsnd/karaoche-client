import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default class InstSLayoutetting extends Component {

  _onPressSettingIcon() {
    Alert.Alert('TODO: save selected data into list');
  }

  
  render() {
    <Image source={require('./KaraocheIcon/icons8-guitar-48.png'),require('./KaraocheIcon/icons8-piano-48.png'),require('./KaraocheIcon/icons8-rock-music-48.png'),require('./KaraocheIcon/icons8-drum-set-48.png'),require('./KaraocheIcon/icons8-clarinet-48.png'),require('./KaraocheIcon/icons8-lyre-48.png')} />
    
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'piano' },
            { key: 'guitar' },
            { key: 'rock-music' },
            { key: 'clarinet' },
            { key: 'drum-set' },
            { key: 'lyre' },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.key}
              <Image
                source={require('./KaraocheIcon/icons8-' +
                  item.key +
                  '-48.png')}
              />
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


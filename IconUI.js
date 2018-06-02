import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,Slider
} from 'react-native';

export default class IconUI extends Component {
  render() { 
    <Image
      source={
        (require('./KaraocheIcon/icons8-guitar-48.png'), require('./KaraocheIcon/icons8-flute-48.png'), require('./KaraocheIcon/icons8-piano-48.png'), require('./KaraocheIcon/icons8-rock-music-48.png'), require('./KaraocheIcon/icons8-drum-set-48.png'), require('./KaraocheIcon/icons8-clarinet-48.png'), require('./KaraocheIcon/icons8-lyre-48.png'), require('./KaraocheIcon/icons8-mute-filled-50.png'))
      }
    />;
    return (
      <View style={styles.container}>
        <View style={styles.upper}>

          <KaraIcon instname="guitar" />
          <KaraIcon instname="piano" />
          <KaraIcon instname="drum-set" />
        </View>

        <View style={styles.middle}>
          <KaraIcon instname="clarinet" />
          <KaraIcon instname="lyre" />
          <KaraIcon instname="rock-music" />
        </View>

        <View style={styles.lower}>
          <KaraIcon instname="flute" />
          <SettingButton />
        </View>

        <PlayButton title="play All" />
        <BpmSlider />

      </View>
    );
  }
}

class KaraIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { showImage: true };

    // Toggle the state every second
  }

  _toggleMute = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  };

  _onPressIcon() {
    Alert.alert('TODO: track setting UI');
  }

  render() {
    let name = this.state.showImage
      ? this.props.instname + ': on'
      : this.props.instname + ':off';
    let display = this.state.showImage
      ? './KaraocheIcon/icons8-' + this.props.instname + '-48.png'
      : './KaraocheIcon/icons8-mute-filled-50.png';
    return (
      <TouchableHighlight
        onPress={this._onPressIcon}
        onLongPress={this._toggleMute}
        style={styles.buttonStyle}>
        <View style={styles.buttonContainer}>
          <Image source={require(display)} />
          <Text style={styles.textOnButton}>{name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: true };
  }

  _togglePlay = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  render() {
    let display = this.state.playing ? this.props.title : 'PAUSE';
    return (
      <View style={styles.trackPlayButtonContainer}>
        <View style={styles.trackPlayButton}>
          <Button onPress={this._togglePlay} title={display} color="#111111" />
        </View>
      </View>
    );
  }
}
class SettingButton extends Component {
  constructor(props) {
    super(props);
    this.state = { setting: true };
  }
  _toggleSetting = () => {
    this.setState({
      setting: !this.state.setting,
    });
  };
  _onPressSetting() {
    
  }
  render() {

    return (
      <TouchableHighlight
        onPress={this._onPressSetting}
        style={styles.buttonStyle}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textOnButton}>Setting</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
class BpmSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 120,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>                                      BPM : {String(value)}</Text>
        <Slider
          step={1}
          minimumValue={80}
          maximumValue={180}
          onValueChange={this.change.bind(this)}
          value={value}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  upper: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 4,
    padding: 15,
    width: 100,
    height: 100,
  },
  textOnButton: {
    fontSize: 10,
    alignItems: 'center',
  },
  trackPlayButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  trackPlayButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    margin: 20,
  },

});

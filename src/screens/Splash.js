import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SIA_IMAGE = require('../assets/images/sia.png');

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={SIA_IMAGE} style={styles.logo} />
      <Text style={styles.heading}>Sia Music</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'cover',
    width: 126,
    height: 163,
  },
  heading: {
    fontSize: 48,
    color: '#ffffff'
  },
});

export default Splash;

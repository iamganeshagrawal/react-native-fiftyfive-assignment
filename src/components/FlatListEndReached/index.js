import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const FlatListEndReached = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./animation.json')}
        autoPlay
        loop
        style={styles.lottieView}
      />
      <Text style={styles.message}>No more tracks.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieView: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  message: {
      fontSize: 8,

  }
});

export default FlatListEndReached;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

const ArtistInfo = ({name, avatar, headerImage}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: headerImage}}
        style={[StyleSheet.absoluteFill, styles.headerImage]}
      />
      <Image source={{uri: avatar}} style={styles.avatarImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.artistName}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    left: windowWidth * 0.08,
  },
  artistName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    left: windowWidth * 0.08 + 80 + 16,
    bottom: 24,
  },
  headerImage: {
    width: windowWidth,
    height: 140,
  },
});

export default ArtistInfo;

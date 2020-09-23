import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import {artistsProfile} from './src/services';
import Splash from './src/screens/Splash';
const SIA_ARTIST_ID = '16775';

const App = () => {
  const [artist, setArtist] = useState(null); // artist state
  const [isLoading, setIsLoading] = useState(true); // init loading track for show splash screen
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    artistsProfile(SIA_ARTIST_ID)
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        if (res.meta.status == 200) {
          setArtist(res.response.artist);
          setIsLoading(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {isLoading ? <Splash /> : <Home artist={artist} />}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

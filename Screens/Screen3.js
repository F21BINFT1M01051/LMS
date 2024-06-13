import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';


const Screen3 = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      showsUserLocation={true}
      showsMyLocationButton={true}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


export default Screen3;

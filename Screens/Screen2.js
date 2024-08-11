import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Questions, GetEnRoll, VideoPlay } from '../Components';
const Screen2 = (props) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Questions text={'Chapter 1 :  What is Graphic Designing?'} />
          <Questions text={'Chapter 2 :  What is Logo Designing?'} />
          <Questions text={'Chapter 3 :  What is Figma Designing?'} />
          <Questions text={'Chapter 4 :  What is AdobePhotoShop Designing?'} />
          <Questions text={'Chapter 5 :  What are frameworks of Designing?'} />


          
        </View>
      </ScrollView>
      
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userText: {
    fontSize: 16,
  },
});

export default Screen2;

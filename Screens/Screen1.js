import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Stars, LecturesCard, VideoPlay } from '../Components';
import { Skills } from '../Components/Skills';


const Screen1 = (props) => {
  const skills = ['Adobe', 'AdobePhotoShop', 'Logo', 'Designing', 'Poster Design', 'Figma'];


  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>Graphic Design</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.text2}>By Syed Fahad</Text>
          <Text style={styles.price}>72$</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Stars />

          <Text style={styles.loremText}>Lorem Ipsum Text</Text>
        </View>

        <LecturesCard />

        <Text style={styles.skillsTitle}>Skills</Text>
        <FlatList
          data={skills}
          renderItem={({ item }) => <Skills item={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.skillsList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    // padding: 16,
  },
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 10,
  },
  text2: {
    fontSize: 13,
    color: 'gray',
    marginLeft: 12
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20
  },
  loremText: {
    fontSize: 12,
    color: 'lightgray',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginLeft:230
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 10
  },
  skillsList: {
    // marginBottom: 20,
  },
});

export default Screen1;

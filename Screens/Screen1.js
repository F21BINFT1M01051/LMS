import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Stars, LecturesCard } from '../Components';
import { Skills } from '../Components/Skills';
import { GetEnRoll } from '../Components/GetEnRoll';


const Screen1 = (props) => {
  const skills = ['Adobe', 'AdobePhotoShop', 'Logo', 'Designing', 'Poster Design', 'Figma'];


  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text>{text}</Text>
          <Text style={styles.text1}>Graphic Design</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.text2}>By Syed Fahad</Text>
            <Text style={styles.price}>72$</Text>
          </View>
          <Text style={styles.loremText}>Lorem Ipsum Text</Text>
          <Stars />
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
          <GetEnRoll btnTitle={'Get Enroll'} onPress={() => console.log('pressed')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loremText: {
    fontSize: 12,
    color: 'lightgray',
    marginBottom: 10,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillsList: {
    marginBottom: 20,
  },
});

export default Screen1;

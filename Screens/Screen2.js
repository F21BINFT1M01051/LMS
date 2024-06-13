import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Questions, GetEnRoll } from '../Components';
const Screen2 = ({route}) => {
  const { allUsers } = route.params;
  return (
    <View style={styles.container}>
      <Questions text={'What is Graphic Designing?'} />
      <GetEnRoll btnTitle={'Get Enroll'} onPress={()=>console.log('pressed')} />

      <FlatList
        data={allUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userText}>Name: {item.name}</Text>
            <Text style={styles.userText}>Email: {item.email}</Text>
          </View>
        )}
      />
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

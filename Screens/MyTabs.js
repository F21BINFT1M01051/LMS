import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { GraphicDesign_1 } from './GraphicDesign1';
import { VideoPlay } from '../Components';

const Tab = createMaterialTopTabNavigator();

const VideoTabs = () => {
  return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <Tab.Navigator>
          {/* <Tab.Screen name='Over' component={GraphicDesign_1} /> */}
          <Tab.Screen name="OverView" component={Screen1} />
          <Tab.Screen name="Lessons" component={Screen2} />
          <Tab.Screen name="Reviews" component={Screen3} />

        </Tab.Navigator>
      </View>



  );
};

export default VideoTabs;

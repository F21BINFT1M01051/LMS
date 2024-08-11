import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash1 } from './Screens/Splash1';
import { Splash2 } from './Screens/Splash2';
import { Splash3 } from './Screens/Splash3';
import { Splash4 } from './Screens/Splash4';
import { Join } from './Screens/Join';
import { Sign_In } from './Screens/SignIn';
import { ResetPassword } from './Screens/ForgetPassword';
import { Update } from './Screens/UpdatedPassword';
import { Sign_Up } from './Screens/SignUp';
import { DashBoard_1 } from './Screens/Dashboard1';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { VideoPlay } from './Components';
import NavigationTabs from './Screens/NavigationTabs';
import app from './Firebase';
import VideoTabs from './Screens/MyTabs';
import GetEnrollScreen from './Screens/GetEnrollScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PaymentScreen2 from './Screens/PaymentScreen2';
import PaymentScreen3 from './Screens/PaymentScreen3';
import Notifications from './Screens/Notifications';
import Settings from './Screens/Settings';
import { GraphicDesign_1 } from './Screens/GraphicDesign1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >

        <Stack.Screen name='Splash1' component={Splash1} />
        <Stack.Screen name='Splash2' component={Splash2} />
        <Stack.Screen name='Splash3' component={Splash3} />
        <Stack.Screen name='Splash4' component={Splash4} />
        <Stack.Screen name='Join' component={Join} />
        <Stack.Screen name="SignIn" component={Sign_In} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='UpdatePassword' component={Update} />
        <Stack.Screen name='SignUp' component={Sign_Up} />
        <Stack.Screen name='NavigationTabs' component={NavigationTabs} />
        <Stack.Screen name='GetEnrollScreen' component={GetEnrollScreen} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
        <Stack.Screen name='PaymentScreen2' component={PaymentScreen2} />
        <Stack.Screen name='PaymentScreen3' component={PaymentScreen3} />
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Dashboard1' component={DashBoard_1} />
        <Stack.Screen name='GraphicDesign1' component={GraphicDesign_1} />








      </Stack.Navigator>
    </NavigationContainer>
  );
};






// // https://www.figma.com/design/XVNFME0dfqN7Rm2BrOUWac/LMS-learning-management-system?node-id=3-1569&t=Ilv19EyLNcHiVkI3-0







// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone with your Firestore database reference to view, edit,
//     // and delete all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Firestore database will be denied until you Update
//     // your rules
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2024, 9, 28);
//     }
//   }
// }


// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone with your Firestore database reference to view, edit,
//     // and delete all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Firestore database will be denied until you Update
//     // your rules
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2024, 9, 28);
//     }
//   }
// }    import collection and addDoc

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
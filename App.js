import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home/Home';
import Test from './src/Screens/Home/components/Test';
import ProductInfo from './src/Components/ProductInfo';
import {LogBox} from 'react-native';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();
function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Products Page.. '}}
          name="Home"
          component={Home}
        />
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="Test"
          component={Test}
        /> */}
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductInfo"
          component={ProductInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

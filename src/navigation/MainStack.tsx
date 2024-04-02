import {NativeStackNavigationOptions, createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import ComicsList from '../screens/Comics/ComicsList';
import { StackRouterOptions } from '@react-navigation/native';
import { ScreenStackProps } from 'react-native-screens';

const Stack = createNativeStackNavigator();

const ScreenOptions: NativeStackNavigationOptions = {
    headerShown: false
}

export const ScreenNames = {
  Home: "Home",
  ComicsList: "ComicsList"
}

export const Screens: {name: string; component: any}[] = [
  {
    name: ScreenNames.Home,
    component: Home,
  },
  {
    name: ScreenNames.ComicsList,
    component: ComicsList,
  },
];



const MainStack = () => {
  return (
    <Stack.Navigator>
      {Screens.map(Screen => (
        <Stack.Screen
          key={Screen.name}
          name={Screen.name}
          component={Screen.component}
          options={ScreenOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;

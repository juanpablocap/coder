import { ActivityIndicator} from 'react-native';
import {useFonts} from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';

export default function App() {


  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigator/>
    </SafeAreaView>
  );
}
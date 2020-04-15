import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './components/home';
import { AppLoading } from 'expo';
import Navigator from './paths/drawer';

const getFonts = () => Font.loadAsync({
    'comicneue-regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'comicneue-bold': require('./assets/fonts/ComicNeue-Bold.ttf')
  });



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return(
      <AppLoading 
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
      />
    )
  }

}

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SecondStack from './secondStack';
import FirstStack from './firstStack';


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: FirstStack,
    },
    About: {
        screen: SecondStack,
    }
});

export default createAppContainer(RootDrawerNavigator);
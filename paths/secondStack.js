import { createStackNavigator } from 'react-navigation-stack';
import About from '../components/about';

const compnts = {
    About: {
        screen: About,
    }
}

const SecondStack = createStackNavigator(compnts);

export default SecondStack;
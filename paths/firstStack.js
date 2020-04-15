import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/home';
import Appointment from '../components/appointment';

import React from 'react';

const compnts = {
    Home: {
        screen: Home,
    },
    Appointment: {
        screen: Appointment
    }
}

const FirstStack = createStackNavigator(compnts);

export default FirstStack;
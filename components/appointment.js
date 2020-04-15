import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {
    universalStyles
} from '../styling/universal';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Appointment () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style={universalStyles.container}>
            <Text style={universalStyles.titleText}>
                Enter your name :
            </Text>
            <TextInput 
                style={universalStyles.nameInput}
                placeholder='e.g. Bruce Wayne'
                onChangeText={(val) => setName(val)}
            />
            <Text style={universalStyles.titleText}>
                Enter your email :
            </Text>
            <TextInput 
                style={universalStyles.nameInput}
                placeholder='e.g. bruce@gmail.com'
                onChangeText={(val) => setName(val)}
            />
            <TouchableOpacity
                onPress={() => {
                    alert("Appointment Made, Please check your email for more details or Call +260977-777777")
                }}
            >
                <Text style={universalStyles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}

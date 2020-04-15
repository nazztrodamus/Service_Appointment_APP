import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView,
    Image,
} from 'react-native';

import {
    universalStyles
} from '../styling/universal';


export default function Home ({ navigation }) {

    
    const pressHandler = () => {
        navigation.navigate('Appointment')
    }

    return (
        <View style={universalStyles.container}>
            <ScrollView>
                <Text style={universalStyles.headerText}>
                    Take a look at some of our custom works
                    </Text>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/1.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    A pair of hand made spider web and spider themed tibetan silver dangly halloween earrings.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/2.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    Black Widow Spider Statement Bracelet Drag Queen, Goth.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/3.png')}
                    />
                    <Text style={universalStyles.parag}>
                    Contemporary spider web themed diamond set wedding ring for her.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/4.jpeg')}
                    />
                    <Text style={universalStyles.parag}>
                    Hip Hop Fashion Iced Out Spider Pendant with 20inch 11mm Gold Tone Cuban Chain.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/5.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    Marcasite Spider Ring - Sterling Silver.
                    </Text>
                    <Text></Text>
                </View>
                <View>
                    <Text style={universalStyles.parag}>
                    if you would like a custom piece made for you by one of our professionals! Please press the button below
                    </Text>
                    <Button title='go to Appointment' onPress={ pressHandler } />
                </View>
            </ScrollView>
        </View>
    )
}

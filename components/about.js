import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {
    universalStyles
} from '../styling/universal';


export default function About () {
    return (
        <View style={universalStyles.container}>
            <Text style={universalStyles.titleText}>
                Charlotte's Web
            </Text>
            <Text style={universalStyles.parag}>
                We have 8 professional goldsmiths and jewelry designers.  Our atelier and store Charlotte's Web, is located in plot number 350, off Palm Drive Road, Chelstone, Lusaka, Zambia.
            </Text>
            <Text></Text>
            <Text style={universalStyles.titleText}>
                Own design
            </Text>
            <Text style={universalStyles.parag}>
            We have been designing and making jewelry for more than 10 years. Most of our pieces are one of a kind. All our jewelry is of fine quality and is handmade with love and craftsmanship. We use different materials including gold, silver, titanium, plexiglas, various types of wood and (semi) precious stones.
            </Text>
            <Text></Text>
            <Text style={universalStyles.titleText}>
                A large collection of handmade jewelry
            </Text>
            <Text style={universalStyles.parag}>
            In our atelier-shop you’ll find a large selection of handmade jewelry. Every year we have OPEN DOORS to present our latest designs. If you would like to be invited to this event, please call +260977-777777 to talk to our agents for more information.
            </Text>
        </View>
    )
}

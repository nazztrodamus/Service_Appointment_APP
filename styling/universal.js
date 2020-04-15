import { StyleSheet } from 'react-native';

export const universalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'comicneue-bold',
        fontSize: 18,
        color: '#333'
    },
    parag: {
        fontFamily: 'comicneue-regular',
        marginVertical: 8,
        lineHeight: 20,
        fontSize: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    nameInput: {
        paddingLeft: 25,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        fontFamily: 'comicneue-regular',
        borderRadius: 50,
        fontSize: 20,
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily: 'comicneue-regular',
    },
    img: {
        flex: 1,
        margin:10
    },
});
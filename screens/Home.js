
import React, {useContext} from 'react';
import { useTheme } from '../components/useTheme';
import Styles from '../components/Styles';
import { View, Text } from 'react-native';

export default function Home() {
    const {isDarkMode} = useTheme
    console.log(isDarkMode)
    return(
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
        <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    )
}


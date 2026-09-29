import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";

import { Logo } from '../components/Logo/Logo';
import { TextInputPass } from '../components/TextInputPass/TextInputPass';

import { ButtonPass } from '../components/ButtonPass/ButtonPass';

import styles  from './HomeStyles';

export default function Home(){
    return(
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.buttonContainer}>
                <ButtonPass/>
            </View>

            <StatusBar style="auto" />
        </View>
    )
}
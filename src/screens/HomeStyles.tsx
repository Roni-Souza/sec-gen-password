import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00244d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer:{
        flexDirection: 'column',
        borderColor: '#009dff',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 30,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#002a52',
    },
    buttonContainer:{
        width: '80%',
        flexDirection: 'column',
    }
});

export default styles;
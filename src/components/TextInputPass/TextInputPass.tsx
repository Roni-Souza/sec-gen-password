import { View, TextInput } from 'react-native';
import { styles } from './TextInputPassStyles';

interface TextInputProps{
    pass:string
}

export function TextInputPass(props:TextInputProps){
    return(
        <>
            <TextInput
                placeholder='password'
                style={styles.inputer}
                value={props.pass}
            >                
            </TextInput>
        </>
    )
}
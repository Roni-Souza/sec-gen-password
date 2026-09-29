import { useState } from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import { styles } from './ButtonPassStyles';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function ButtonPass(){

    const [senha, setSenha] = useState('');
    const [tamanho, setTamanho] = useState('10');
    const [forca, setForca] = useState('');

    function handleGenButton(){

        let tamanhoSenha = Number(tamanho);

        if(isNaN(tamanhoSenha) || tamanhoSenha < 1){
            tamanhoSenha = 1;
        }

        let senhaFinal = generatePass(tamanhoSenha);

        setSenha(senhaFinal);

        if(tamanhoSenha <= 6){
            setForca('Senha Fraca');
        }
        else if(tamanhoSenha <= 12){
            setForca('Senha Média');
        }
        else{
            setForca('Senha Forte');
        }
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(senha);
    }

    return(
        <View>

            <TextInput
                style={{
                    width: '100%',
                    height: 50,
                    borderWidth: 2,
                    borderColor: '#009de0',
                    borderRadius: 5,
                    marginBottom: 15,
                    textAlign: 'center',
                    backgroundColor: '#FFF'
                }}
                keyboardType="numeric"
                value={tamanho}
                onChangeText={setTamanho}
                placeholder="Quantidade de caracteres"
            />

            <TextInputPass pass={senha}/>

            <Text
                style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 18
                }}
            >
                {forca}
            </Text>

            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed && { backgroundColor: '#005f88' }
                ]}
                onPress={handleGenButton}
            >
                <Text style={styles.text}>🔑 Gerar senha 🔑</Text>
            </Pressable>

            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed && { backgroundColor: '#005f88' }
                ]}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}>🗒️ Copiar 🗒️</Text>
            </Pressable>

        </View>
    )
}
import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import * as Clipboard from 'expo-clipboard';

import { styles } from "./HomeStyles";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { passwordService } from "../services/PasswordService";

export function SecButton() {
    const [pass, setPass] = useState('');
    const [passwordLength, setPasswordLength] = useState('8');

    function copyPassword() {
        if (pass) {
            Clipboard.setStringAsync(pass);
        }
    };

    function handlePassword() {
        const length = parseInt(passwordLength) || 8;
        let token = passwordService(length);
        setPass(token);
    }

    return (
        <>
            <View style={{ marginBottom: 20, alignItems: 'center', width: '100%' }}>
                <Text style={{ color: '#E5BF3C', fontWeight: 'bold', marginBottom: 8 }}>
                    TAMANHO DA SENHA:
                </Text>
                <TextInput
                    style={{
                        backgroundColor: '#fff',
                        width: '80%',
                        height: 40,
                        textAlign: 'center',
                        borderRadius: 5,
                        fontSize: 18,
                        color: '#000'
                    }}
                    keyboardType="numeric"
                    value={passwordLength}
                    onChangeText={setPasswordLength}
                    maxLength={2}
                />
            </View>

            <InputPassword pass={pass} />
            <Pressable
                onPress={handlePassword}
                style={({ pressed }) => [
                    styles.button,
                    { 
                        backgroundColor: pressed ? '#D9A300' : '#E5BF3C', // Escurece o amarelo ao pressionar
                        transform: [{ scale: pressed ? 0.98 : 1 }] // Efeito sutil de clique
                    }
                ]}
            >
                <Text style={styles.texto}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable
                onPress={copyPassword}
                style={({ pressed }) => [
                    styles.button,
                    { 
                        backgroundColor: pressed ? '#333333' : '#000', // Cinza ao pressionar
                        marginTop: 10 
                    }
                ]}
            >
                <Text style={styles.texto}>COPIAR 🗒️</Text>
            </Pressable>
        </>
    );
}

import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { styles } from "./SecButtonStyles"; 
import { InputPassword } from "../InputPassword/InputPassword";
import { passwordService } from "../../services/PasswordService";

export function SecButton() {
    const [pass, setPass] = useState('');
    const [passwordLength, setPasswordLength] = useState('8');

    function handlePassword() {
        const length = parseInt(passwordLength) || 8;
        setPass(passwordService(length));
    }

    return (
        <>
            <View style={{ marginBottom: 15, alignItems: 'center' }}>
                <Text style={{ color: '#E5BF3C', fontWeight: 'bold' }}>LARGURA:</Text>
                <TextInput
                    style={{ backgroundColor: '#fff', width: 50, textAlign: 'center', borderRadius: 5 }}
                    keyboardType="numeric"
                    value={passwordLength}
                    onChangeText={setPasswordLength}
                />
            </View>

            <InputPassword pass={pass} />

            <Pressable 
                onPress={handlePassword}
                style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#D9A300' : '#E5BF3C' }]}
            >
                <Text style={styles.texto}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable 
                onPress={() => Clipboard.setStringAsync(pass)}
                style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#333' : '#000', marginTop: 10 }]}
            >
                <Text style={styles.texto}>COPIAR 🗒️</Text>
            </Pressable>
        </>
    );
}
import React, {useState} from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { styles } from "./SecButtonStyles";
import { InputPassword } from "../InputPassword/InputPassword";
import { passwordService } from "../../services/PasswordService";



export function SecButton(){
    const [ pass, setPass ] = useState('')
    const [pressed, isPressed] = useState(false)

    function copyPassword() {
        Clipboard.setStringAsync(pass);
    };

    function handlePassword() {
        let token = passwordService()
        setPass(token)
        isPressed(!pressed)
    }

    return(
        <>
            {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

            <InputPassword pass={pass}/>
            

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={handlePassword}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable style={styles.button} >
                <Text style={styles.texto} onPress={copyPassword}>COPIAR 🗒️</Text>
            </Pressable>
        </>


    )
}
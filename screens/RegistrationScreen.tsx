// TODO: Create Register Screen & Register Functionality
import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { registerUser } from "../services/authService";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { Button } from "@react-navigation/elements";

type RegistrationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Registration'>;

const RegistrationScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<RegistrationScreenNavigationProp>();

    //   Register Function
    const register = () => {
    registerUser(email, password);
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>

                <TextInput
                    style={styles.inputField}
                    placeholder="Your Email"
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                />

                <TextInput
                    style={styles.inputField}
                    placeholder="Your Password"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Register Button</Text>
                </TouchableOpacity>

                <Button onPress={() => navigation.navigate('Login')}>
                    Go to Login
                </Button>
                
            </View>
        </SafeAreaView>    
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 30
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "black",
        textAlign: 'center',
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})
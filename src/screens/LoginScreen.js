// src/screens/LoginScreen.js
import React, { useContext, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>RobotTrack2K</Text>

            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                style={styles.input}
                secureTextEntry
            />

            {isLoading ? (
                <ActivityIndicator size="large" color="#6200ee" />
            ) : (
                <Button
                    mode="contained"
                    onPress={() => login(email, password)}
                    style={styles.button}
                >
                    Entrar
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
        paddingVertical: 5,
    },
});

export default LoginScreen;
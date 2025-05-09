import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Pressable,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);
        //Later send to auth service or validate locally

        setSubmitted(true);
        setEmail('');
        setPassword('');
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (

        <KeyboardAvoidingView
            style={GlobalStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <ScrollView contentContainerStyle={GlobalStyles.scrollViewPadding}>

                <View style={GlobalStyles.loginContainer}>

                <Text style={GlobalStyles.loginHeaderText}>Welcome to Little Lemon</Text>
                <Text style={GlobalStyles.regularText}>Login to continue</Text>

                {submitted && (
                        <Text style={GlobalStyles.loginSuccessMessage}>
                            You are logged in!
                        </Text>
                    )}

                    <Text style={GlobalStyles.label}>Email</Text>
                    <TextInput
                        style={[GlobalStyles.inputBase, GlobalStyles.input]}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter your email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholderTextColor='#666'
                        clearButtonMode='while-editing'
                    />

                    <Text style={GlobalStyles.label}>Password</Text>
                    <TextInput
                        style={[GlobalStyles.inputBase, GlobalStyles.input]}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        placeholderTextColor='#666'
                    />

                    <Pressable style={GlobalStyles.button} onPress={handleLogin}>
                        <Text style={GlobalStyles.buttonText}>Login</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};




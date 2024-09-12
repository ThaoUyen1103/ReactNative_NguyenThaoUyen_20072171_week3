import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SocialIcon } from 'react-native-elements'; // Thêm SocialIcon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { RadioButton } from 'react-native-paper';

// HomeScreen Component
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#c6f7d7" }}>
            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.titleGrow}>LOGIN</Text>
            </View>

            <View style={styles.containerHome}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#000" />
                </View>
            </View>

            <View style={styles.containerHome}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry />
                    <AntDesign name="eye" size={28} />
                </View>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.containerText}>
                    <Text>When you agree to terms and conditions</Text>
                </View>

                <View style={styles.containerTextF}>
                    <Text style={styles.textF}>Forgot your password?</Text>
                </View>

                <View style={styles.containerText}>
                    <Text>Or login with:</Text>
                </View>

                <View style={styles.socialContainer}>
                    <SocialIcon type="google" />
                    <SocialIcon type="facebook" />
                    <SocialIcon type="twitter" />
                    {/* Thay đổi hoặc thêm biểu tượng xã hội khác tùy theo yêu cầu */}
                </View>
            </View>
        </View>
    );
};

// Register Component
const Register = () => {
    const [gender, setGender] = useState('male');

    return (
        <View style={{ flex: 1, backgroundColor: "#c6f7d7" }}>
            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.titleGrow}>REGISTER</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#000" />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#000" />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#000" />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry />
                    <AntDesign name="eye" size={28} />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Birthday" placeholderTextColor="#000" />
                    <Fontisto name="date" size={25} />
                </View>
            </View>

            <View style={{ flex: 2, alignItems: "flex-start" }}>
                <View style={styles.radioContainer}>
                    <View style={styles.radioItem}>
                        <RadioButton
                            value="male"
                            status={gender === 'male' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('male')}
                        />
                        <Text style={styles.radioText}>Male</Text>
                    </View>
                    <View style={styles.radioItem}>
                        <RadioButton
                            value="female"
                            status={gender === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('female')}
                        />
                        <Text style={styles.radioText}>Female</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text>When you agree to terms and conditions</Text>
            </View>
        </View>
    );
}

// App Component
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    containerHome: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleGrow: {
        fontSize: 25,
        fontWeight: "bold",
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerTextF: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textF: {
        color: "#6495ED",
    },
    button: {
        backgroundColor: '#B22222',
        padding: 15,
        width: '90%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        flex: 1,
        padding: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9ed9b3',
        width: '90%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 20,

    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 20,
    },
    radioText: {
        fontSize: 16,
        marginLeft: 8,
    },
});

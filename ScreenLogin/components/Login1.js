import React from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Home Screen
const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#F0F8FF', '#ADD8E6', '#00BFFF']} style={{ flex: 1 }}>


      <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
        <Icon name="circle" size={140} />
      </View>

      <View style={styles.container}>
        <Text style={styles.titleGrow}>GROW</Text>
        <Text style={styles.titleGrow}>YOUR BUSINESS</Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}>We will help you to grow your business using</Text>
        <Text style={{ fontWeight: "bold" }}>online server</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 40 }}>
        <View style={styles.buttonLogin}>
          <Button title="Login" color="#000" onPress={() => navigation.navigate('ForgetPassWord')} />
        </View>

        <View style={styles.buttonLogin}>
          <Button title="Sign Up" color="#000" onPress={() => navigation.navigate('Verification')} />
        </View>

      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>HOW WE WORK?</Text>
      </View>

    </LinearGradient>
  );
};


//FORGET PASSWORD
const forgetPasswordScreen = () => {
  return (
    <LinearGradient colors={['#F0F8FF', '#ADD8E6', '#00BFFF']} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <Fontisto name="locked" size={100} />
        </View>

        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>FORGET </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>PASSWORD</Text>
        </View>

        <View style={styles.container}>
          <Text style={{ fontWeight: "bold" }}>Provide your account’s email for which you</Text>
          <Text style={{ fontWeight: "bold" }}>want to reset your password</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} style={{ marginRight: 10 }} />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#000" />
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>
  );
};


// VERIFICATION 
const verificationSceen = () => {
  return (
    <LinearGradient colors={['#F0F8FF', '#ADD8E6', '#00BFFF']} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 55, fontWeight: "bold" }}>CODE</Text>

        </View>

        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>VERIFICATION</Text>
        </View>

        <View style={styles.container}>
          <Text style={{ fontWeight: "bold" }}>Enter ontime password send on </Text>
          <Text style={{ fontWeight: "bold" }}>+84123456789</Text>
        </View>

        <View style={styles.codeContainer}>
          {[...Array(6)].map((_, index) => (
            <TextInput key={index} style={styles.codeInput} maxLength={1} keyboardType="numeric" />
          ))}
        </View>


        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VERIFICATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )

}

//STACK NAVIGATION SETUP
const Stack = createStackNavigator();

export default function Login1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgetPassWord" component={forgetPasswordScreen} />
        <Stack.Screen name="Verification" component={verificationSceen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleGrow: {
    fontSize: 25,
    fontWeight: "bold",

  },
  button: {
    backgroundColor: '#FFEB3B',
    padding: 15,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },

  input: {
    flex: 1,
    padding: 5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    width: '90%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },

  codeInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center'
  },
  buttonLogin: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#FFEB3B',
    padding: 15,
    width: '60px',
    alignItems: 'center',
    marginBottom: 10,
  }
})


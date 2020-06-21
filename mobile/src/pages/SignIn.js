import React, { useState } from 'react';
import api from '../services/api';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

function SignIn({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  onRequest = async () => {
    try {
      const res = await api.post('/users', {name, password});
      console.log(res.data)
      return res.data;
    } catch (error) {
      console.log('error:', error);
    }
}

  return( 
    <>
      <View style={styles.searchForm}>
          <TextInput 
            style={styles.inputName}
            placeholder="Seu nome"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            required
            value={name}
            onChangeText={(name) => { setName(name)}}
          />
      </View>

      <View style={styles.inputPassword}>
        <TextInput 
            style={styles.searchInput}
            placeholder="Sua senha"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            required
            value={password}
            onChangeText={(password) => { setPassword(password)}} 
          />
      </View>

      <TouchableOpacity style={styles.loadSingIn}  onPress={() => navigation.navigate('SignUp')}>  
        <Text  size={30} color="#fff">Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loadSingUp}  onPress={this.onRequest}>  
        <Text  size={30} color="#fff">Entrar</Text>
      </TouchableOpacity>
  </>
    );
}

export default SignIn;
const styles = StyleSheet.create({
  searchForm: {
    flexDirection: "row"
  },

  searchForm: {
    marginTop: 200,
  },

    inputName: {
    width: 370,
    height: 50,
    left: 15,
    top: 20,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  inputPassword: {
    width: 370,
    height: 50,
    left: 15,
    top:  50,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  loadSingIn: {
    width: 150,
    height: 50,
    left: 15,
    top: 90,
    backgroundColor: "#e5e500",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }, 

  loadSingUp: {
    width: 150,
    height: 50,
    left: 200,
    top: 40,
    backgroundColor: "#e5e500",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }
});

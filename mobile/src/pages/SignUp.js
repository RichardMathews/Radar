import React, { useState } from 'react';
// import api from '../services/api';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

function SignUp({ navigation }) {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  
  // async function newUser({ navigation }) {
  //   const response = await api.post('/users', {
  //     email,
  //     name,
  //     password,
  //    });

  //   console.log(response.data.users);
  //   response.data.users;
  // }

  return( 
    <>
      <Image style={styles.avatar} source={{ uri: 'https://api.adorable.io/avatars/400/abott@adorable.io.png'}} />
      <View style={styles.searchForm}>
          <TextInput 
            style={styles.searchEmail}
            placeholder="Seu e-mail"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            required
            // value={email}
            // onChange={setEmail}
          />
      </View>

      <View style={styles.searchForm}>
          <TextInput 
            style={styles.searchName}
            placeholder="Seu nome"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            required
            // value={name}
            // onChange={setName}
          />
      </View>

      <View style={styles.searchPassword}>
        <TextInput 
            style={styles.searchInput}
            placeholder="Sua senha"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            required
            // value={password}
            // onChange={setPassword}
          />
      </View>

      <TouchableOpacity style={styles.loadSingIn}  onPress={() => navigation.navigate('SignIn')}>  
        <Text  size={30} color="#fff">Já tenho conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loadSingUp}  onPress={() => {}}>  
        <Text  size={30} color="#fff">Criar Conta</Text>
      </TouchableOpacity>
  </>
    );
}

export default SignUp;
const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 200,
    left: 100,
    top: 60,
    borderRadius: 100,
    borderWidth: 4,
  },

  searchForm: {
    flexDirection: "row"
  },

  searchForm: {
    marginTop: 50,
  },

  searchEmail: {
    width: 370,
    height: 50,
    left: 15,
    top: 40,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  searchName: {
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

  searchPassword: {
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
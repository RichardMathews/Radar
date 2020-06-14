import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
// import api from '../services/api';
import { connect, disconnect, subscribeToNewUser } from '../services/socket';

function Main({ navigation }) {
  const [users, setUsers] = useState([]);
  const [currentRegion,  setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      //Receber a permissão
      const { granted } = await requestPermissionsAsync();

      if(granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          //Obter o zoom no mapa
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }
    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewUser(user => setUsers([...users, user]));
  }, [users])

  //Atualização em tempo real
  function setupWenSocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(
      latitude,
      longitude,
    );
  }

  // async function loadUsers() {
  //   const { latitude, longitude } = currentRegion;

  //   const response = await api.get('/users', {
  //     params: {
  //       latitude,
  //       longitude,
  //     }
  //   });
  // 
  //   setUsers(response.data.users);
  //   setupWenSocket();
  // }

  //Carregar o mapa
  function handleRegionChanged(region) {
    setCurrentRegion(region);
    setupWenSocket();
  }

  if(!currentRegion) {
    return null;
  }

  return ( 
    <>
      <MapView 
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map} 
      >
        {users.map(user => (
          <Marker 
          key={user._id}
          coordinate={{
            // latitude: user.location.coordinates[1], 
            // longitude: user.location.coordinate[0],
            }}>
            {/* <Image style={styles.avatar} source={{ uri: }} /> */}
            {/* Exibe tudo que estiver dentro da imagem */}
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.userName}>{}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff',
  },
  callout: {
    width: 200,
    alignItems: 'center',
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  serachForm: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#e5e500',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  }
});

export default Main;
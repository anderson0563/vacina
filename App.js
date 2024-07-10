import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
 } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Minha Caderneta Digital
        </Text>
      <TouchableOpacity
          style={styles.buttonBlue}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }>
          <ImageBackground 
          style={styles.image}
          source={require('./assets/backgroundblue.png')}>
          <Text style={styles.buttonTextStyle}>
            VACINAS {"\n"}PRÉ-CADASTRADAS
          </Text>
          <Image
            source={require('./assets/cadastro.png')}
            style={styles.buttonImageIconStyle}
          />
          </ImageBackground>  
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRed}
          activeOpacity={0.5}>
          <ImageBackground 
          style={styles.image}
          source={require('./assets/backgroundred.png')}>  
          <Text style={styles.buttonTextStyle}>
            NOVAS VACINAS
          </Text>
          <Image
            source={require('./assets/novo.png')}
            style={styles.buttonImageIconStyle}
          />
        </ImageBackground>  
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGreen}
          activeOpacity={0.5}>
          <ImageBackground 
          style={styles.image}
          source={require('./assets/backgroundgreen.png')}>  
          <Text style={styles.buttonTextStyle}>
            LISTAR VACINAS
          </Text>
          <Image
            source={require('./assets/listar.png')}
            style={styles.buttonImageIconStyle}
          />
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonYellow}
          activeOpacity={0.5}>
          <ImageBackground 
          style={styles.image}
          source={require('./assets/backgroundyellow.png')}>
          <Text style={styles.buttonTextStyle}>
            AGENDAR VACINA
          </Text>
          <Image
            source={require('./assets/alarm.png')}
            style={styles.buttonImageIconStyle}
          />
        </ImageBackground>  
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: '100%',
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    margin: 10,
    marginTop: 10,
    padding: 30,
    backgroundColor: '#eee',
  },
  buttonBlue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cce5ff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  buttonRed: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffcccc',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  buttonGreen: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccffcc',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  buttonYellow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffcc',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    marginRight: 5,
    height: 45,
    width: 45,
    position: 'absolute', 
    right: 10,
  },
  buttonTextStyle: {
    color: '#000',
    marginBottom: 4,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Image, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AxiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext';

const Login = (navigation) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { saveDadosUsuario } = useContext(DataContext);


  const handleLogin = async () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Senha:', password);
    // Lógica adicional para autenticar o usuário

    try {
      const resultado = await AxiosInstance.post('/auth/signin/',{
      username: email,
        password: senha,
    });

    if(resultado.status === 200) {

      var jwtToken = resultado.data;
      saveDadosUsuario(jwtToken ["acessToken"]);

      navigation.navigate("Home");
    }
    else{
      alert("Usuário ou senha inválidos");
    }
  }catch(error){
    console.log('Erro durante o processo de login' + error);

}
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleButtonPress = () => {
    setIsButtonPressed(true);
  };

  const handleButtonRelease = () => {
    setIsButtonPressed(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.welcomeText}>Bem vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        placeholderTextColor="black"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholderTextColor="black"
        />
        <TouchableOpacity style={styles.passwordVisibilityButton} onPress={handleTogglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={handleLogin} onPressIn={handleButtonPress} onPressOut={handleButtonRelease}>
        <View
          style={[
            styles.button,
            isButtonPressed ? styles.buttonPressed : null,
          ]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    color: 'black',
  },
  passwordVisibilityButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonPressed: {
    backgroundColor: 'darkgray',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Login;

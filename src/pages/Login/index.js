import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import Logo from "../../../assets/Logo.png";
import { useState, useContext } from "react";
import AxiosInstance from '../../api/AxiosInstance'
import { DataContext } from '../../context/DataContext'

export  default function Login({navigation}) {

  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  const {armazenarDadosUsuario} = useContext(DataContext)

  async function handleLogin(){
    try {
      const resultado = await AxiosInstance.post('/auth/signin',{
          username: usuario,
          password: senha
        });

      if(resultado.status === 200) {
        var jwtToken = resultado.data;
        armazenarDadosUsuario(jwtToken["accessToken"]);

        navigation.navigate('Home')
      } else {
        console.log('Erro ao realizar o login!')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.titulo}>Livraria</Text>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo}/>
      </View>
      <Text style={styles.saudacao}>Bem-vindo(a)</Text>
      <TextInput style={styles.input} placeholder="Nome de usuário" onChangeText={setUsuario} value={usuario}/>
      <TextInput style={styles.input} placeholder="Senha" onChangeText={setSenha} value={senha}/>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(57,68,87,1)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  titulo: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  saudacao: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    border: "none",
    backgroundColor: "#FFF",
    width: 200,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffbd59",
    width: 70,
    height: 40,
    marginTop: 50,
    borderRadius: 20,
    fontSize: 15,
    padding: 10,
    border: "none",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
  },
  logo: {
    height: "100%",
    width: 120
  },
});

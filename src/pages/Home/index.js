import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext, useState, useEffect } from 'react';
import AxiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext';

 const Home = () => {
    const {dadosUsuario} = useContext(DataContext);
    const [dadosEditora, setDadosEditora] = useState([]);

    useEffect(() =>{
      getTodasEditoras();
    }
    )

    const getTodasEditoras = async () => {
      await AxiosInstance.get(
        '/editoras', 
        {headers: {"Authorization" : `Bearer ${dadosUsuario?.token}`}}
      ).then( resultado => {
        console.log('getTodasEditoras' + JSON.stringify(resultado.data));
          setDadosEditora(resultado.data);
      }).catch((error) => {
        console.log('Ocorreu um erro inesperado' + error);
      })
    

    }

    return (
      <View>
        <ScrollView>
        
        <View style={{ marginTop: 55, alignItems: 'center' }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Editoras</Text>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 10 }}>
    {dadosEditora.map((editora, index) => (
      <Image key={index} source={{ uri: editora.imagem }} style={{ width: 80, height: 80 }} />
    ))}
  </View>
</View>
  
          <View style={{ marginTop: 50}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}> Todos os livros</Text>
            {/* Carrossel com livros disponíveis */}
            <ScrollView horizontal>
              <Image source={livro1} style={{ width: 120, height: 180, marginRight: 10 }} />
              <Image source={livro2} style={{ width: 120, height: 180, marginRight: 10 }} />
              <Image source={livro3} style={{ width: 120, height: 180, marginRight: 10 }} />
              <Image source={livro4} style={{ width: 120, height: 180, marginRight: 10 }} />
              <Image source={livro5} style={{ width: 120, height: 180, marginRight: 10 }} />
              <Image source={livro6} style={{ width: 120, height: 180, marginRight: 10 }} />
            </ScrollView>
          </View>
  
          <View style={{ marginTop: 30, marginBottom:-200 }}>
            <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}> Livros em Destaque</Text>
  
            {/* Lista de livros em destaque */}
            <ScrollView horizontal>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 10 }}>
              <Image source={destaque6} style={{ width: 120, height: 180 }} />
              <Image source={destaque5} style={{ width: 120, height: 180 }} />
              <Image source={destaque4} style={{ width: 120, height: 180 }} />
              <Image source={destaque3} style={{ width: 120, height: 180 }} />
              <Image source={destaque2} style={{ width: 120, height: 180 }} />
              <Image source={destaque1} style={{ width: 120, height: 180 }} />  
            </View>
            </ScrollView>
          </View>
  
          <View style={{ marginTop: 320, flexDirection: 'row', justifyContent: 'space-around', bottom: 0, left: 0, right: 0 }}>
            {/* Botões de navegação */}
            <TouchableOpacity>
              <Icon name="home" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="heart" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="person" size={25} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default Home;
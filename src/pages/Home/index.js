import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


// Importe as imagens das editoras aqui
 const editora1 = require('../../../assets/editora.png');
 const editora2 = require('../../../assets/editora2.png');
 const editora3 = require('../../../assets/editora3.png');

// Importe as imagens dos livros disponíveis aqui
const livro1 = require('../../../assets/livro.jpg');
const livro2 = require('../../../assets/livro2.jpg');
const livro3 = require('../../../assets/livro3.jpg');
const livro4 = require('../../../assets/livro4.jpg');
const livro5 = require('../../../assets/livro5.jpg');
const livro6 = require('../../../assets/livro6.jpg');

//  imagens dos livros em destaque aqui
 const destaque1 = require('../../../assets/livro.jpg');
 const destaque2 = require('../../../assets/livro2.jpg');
 const destaque3 = require('../../../assets/livro3.jpg');
 const destaque4 = require('../../../assets/livro4.jpg');
 const destaque5 = require('../../../assets/livro5.jpg');
 const destaque6 = require('../../../assets/livro6.jpg');

 const Home = () => {
    return (
      <View>
        <ScrollView>
        
          <View style={{ marginTop: 55, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}> Editoras</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 10 }}>
              {/* foto de editora */}
              <Image source={editora1} style={{ width: 80, height: 80 }} />
              <Image source={editora2} style={{ width: 80, height: 80 }} />
              <Image source={editora3} style={{ width: 80, height: 80 }} />
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
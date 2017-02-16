
import React from 'react';
import { AppRegistry } from 'react-native';
import Titulo from './src/componentes/titulo';

const App = () => {
  return (
    <Titulo></Titulo>
  );
};

AppRegistry.registerComponent('diccionario', () => App);

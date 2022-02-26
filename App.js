import React from 'react';
import Mainscreen from './src/Screens/Mainscreen';
import CountContext from './src/Context/CountContext';

export default function App() {
  return (
    <CountContext>
    <Mainscreen></Mainscreen>
    </CountContext>
  );
}

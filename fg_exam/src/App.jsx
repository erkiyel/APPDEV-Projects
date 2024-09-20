import React from 'react';
import { keyboardX1000 } from './data';
import Keyboard from './Keyboard';
import Footer from './Footer';
import './App.css'

export default function App() {
  return (
    <>
      <h1>Keyboard Documentation</h1>
      <Keyboard
        model={keyboardX1000.model}
        overview={keyboardX1000.overview}
        specs={keyboardX1000.specs}
        inBox={keyboardX1000.inBox}
        features={keyboardX1000.features}
        setup={keyboardX1000.setup}
        troubleshooting={keyboardX1000.troubleshooting}
        maintenance={keyboardX1000.maintenance}
        warranty={keyboardX1000.warranty}
      />
      <Footer />
    </>
  );
}
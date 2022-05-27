import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import App from './App';
import Fonts from './Fonts';
import theme from './theme';

const backendOptions = {
  enableMouseEvents: true
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <DndProvider backend={TouchBackend} options={backendOptions}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </DndProvider>
  </React.StrictMode>
);

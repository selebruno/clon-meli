import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


axios.defaults.baseURL = "https://frontend-test-meli.herokuapp.com" || "http://localhost:3000"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
     <ChakraProvider theme={theme}>
       <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

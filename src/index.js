<<<<<<< Updated upstream
import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { theme } from "./theme";
import { store } from "./redux/store";
>>>>>>> Stashed changes

axios.defaults.baseURL = "https://backend-nike.onrender.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< Updated upstream
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
=======
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
>>>>>>> Stashed changes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

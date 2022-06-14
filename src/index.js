import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./context/store/configureStore";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MovieAppProvider from "./context/MovieContext";
import { setTitleFilter } from "./context/actions/filterAction";

const store = configureStore();

// const jsx = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

// ReactDOM.render(jsx, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

store.dispatch(setTitleFilter("pokemon"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/global.scss";
import View from "./components/View";
import ProductListPage from "./components/ProductListPage";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import ProductListContextProvider from "./context/ProductList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductListContextProvider>
      <Navbar />
      <View>
        <ProductListPage />
      </View>
    </ProductListContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

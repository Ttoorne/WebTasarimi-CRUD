import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CommentsContextProvider from "./contexts/CommentContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CommentsContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </CommentsContextProvider>
  </BrowserRouter>
);

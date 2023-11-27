import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
=======
    <App />
  </React.StrictMode> 
>>>>>>> 344f906ae0083e85623676761652ac8c05a43454
);

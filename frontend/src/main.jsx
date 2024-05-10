import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
// import i18next from "./i18next.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

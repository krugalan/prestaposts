import { Provider } from "react-redux";
import store, { persistor } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { RoutesProvider } from "./config/RoutesProvider";
import "./app.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer hideProgressBar />
        <RoutesProvider />
      </PersistGate>
    </Provider>
  );
}

export default App;

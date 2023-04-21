import { useState } from "react";
import { Provider } from "react-redux";

import { store } from "./config/store";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Provider>
  );
}

export default App;

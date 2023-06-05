// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";
import MainScreen from "./MainScreen";
import { useSelector } from "react-redux";

const App = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <Provider store={store}>
      <div className="bg-slate-900">
        {!loggedIn ? <Login /> : <MainScreen />}
      </div>
    </Provider>
  );
};

export default App;

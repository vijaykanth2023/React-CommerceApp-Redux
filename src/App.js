import React from 'react';
import './App.css';
import Routerpath from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routerpath/>
      </div>
    </Provider>
  );
}

export default App;

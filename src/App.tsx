import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Route';
import { Provider } from 'react-redux';
import Store from './ReduxStore/Store';

function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

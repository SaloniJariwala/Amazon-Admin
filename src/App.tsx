import './App.css';
import Layout from './Layout';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Route';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

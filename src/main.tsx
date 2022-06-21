import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App num={30} />
    </Provider>
  </StrictMode>,
);

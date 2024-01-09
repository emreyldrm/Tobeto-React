import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './components/store2/configureStore';
import { AuthProvider } from './contexts/AuthContext';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// const globalStore = configureStore();

root.render(
    //context api
    // <AuthProvider> 
      //redux
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    // </AuthProvider>

);

reportWebVitals();

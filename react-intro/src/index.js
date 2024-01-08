import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './components/store/configureStore';
import { AuthProvider } from './components/contexts/AuthContext';
import { store } from "./components/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const globalStore = configureStore();
root.render(
    // <AuthProvider>
        <Provider store={store}>
            <App />
        </Provider>
    // </AuthProvider>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import ErrorPage from './components/ErrorPage';
import Dashboard from './views/Dashboard';
import Inicio from './components/dashboard/Inicio';
import Chat from './components/dashboard/Chat';
import Logout from './components/dashboard/Logout';
import Auth from './components/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Login/>} />
            <Route element={<Auth/>} >
              <Route path='dashboard' element={<Dashboard/>} >
                  <Route index element={<Inicio/>}/>
                  <Route path='chat' element={<Chat/>}/>
                  <Route path='logout' element={<Logout/>}/>
                </Route>
            </Route>
            <Route path='*' element={<ErrorPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

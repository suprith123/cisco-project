import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VoterList from './components/VoterList';
import AddVoter from './components/AddVoter';

export const UserContext = React.createContext();

const addChange=()=>{
  return(
      document.getElementById('t1').classList.add('try')
  )
};
const removeChange=()=>{
  return(
      document.getElementById('t1').classList.remove('try')
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <UserContext.Provider value={{n1: addChange,n2: removeChange}} >
        <VoterList />
      </UserContext.Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

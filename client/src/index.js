import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import RecordStore from "./store/RecordStore";
import Footter from "./components/Footter";

export const Context = createContext(null)



console.log(process.env.REACT_APP_API_URL)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            record: new RecordStore()
        }}>
            <App />
            <Footter/>

        </Context.Provider>
    </React.StrictMode>
);




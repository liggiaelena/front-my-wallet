import "./styles/reset.css"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import SingUpPage from './components/SingUpPage';
import Balance from "./components/Balance/Balance";
import ChangeBalance from "./components/Balance/ChangeBalance";
import UserContext from "./contexts/UserContext";



export default function App(){
  const [user, setUser] = useState('');

  return(
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/sing-up" exact>
            <SingUpPage />
          </Route>
          <Route path="/balance" exact>
            <Balance />
          </Route>
          <Route path="/balance-update/:type" exact>
            <ChangeBalance />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
      
  );
}

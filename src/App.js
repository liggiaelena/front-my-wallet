import "./styles/reset.css"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from './components/LoginPage';
import SingUpPage from './components/SingUpPage';



export default function App(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/sing-up" exact>
        <SingUpPage />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

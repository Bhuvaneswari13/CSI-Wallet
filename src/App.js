import './App.css';
import Dasbord from './components/Dasboard';
import Dashboard_content from './components/Dashboard_content';
import Direct from './components/Direct';
import Addfunds from './components/addfunds';
import Pendingdepo from './components/pendingdepo';
import Transfer from './components/transfer';
import WalletChange from './components/wallet_change';
import ActivationWallet from './components/activation_wallet';
import CashWallet from './components/cash_wallet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
       <Switch>
          <Route path="/" exact>
                 <div className='main-div'>
                   <Dasbord/>
                    <Dashboard_content/>
                  </div>
          </Route>

          <Route path="/Direct" exact>
               <div className='main-div'>
              <Dasbord/>
               <Direct/>
               </div>
          </Route>

          <Route path="/addfunds" exact>
               <div className='main-div'>
              <Dasbord/>
               <Addfunds/>
               </div>
          </Route>

          <Route path="/pendingdepo" exact>
               <div className='main-div'>
              <Dasbord/>
               <Pendingdepo/>
               </div>
          </Route>
          <Route path="/transfer" exact>
               <div className='main-div'>
              <Dasbord/>
               <Transfer/>
               </div>
          </Route>
          <Route path="/wallet-change" exact>
               <div className='main-div'>
              <Dasbord/>
               <WalletChange/>
               </div>
          </Route>
          <Route path="/activation-wallet" exact>
               <div className='main-div'>
              <Dasbord/>
               <ActivationWallet/>
               </div>
          </Route>
          <Route path="/cash-wallet" exact>
               <div className='main-div'>
              <Dasbord/>
               <CashWallet/>
               </div>
          </Route>


    </Switch>
    </Router>
 
  
  );
}

export default App;

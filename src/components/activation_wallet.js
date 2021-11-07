/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './pendingdepo.css'
import UpBar from "./UpBar";
import './activation_wallet.css'

const ActivationWallet = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container6">
            <div className="first_contain6">
            <div className="sub_first_contain6">
                <div className="title_contain6">
                    <h3>Activation Wallet Report of 707123 (Balance - TRX 0.00) </h3>
                    <br/>
                    
                    <span className="left"> 
                        <label id="up-display" className="title_contain6">Display  <select name="nos" id="nos">
                        <option value="1">1</option>
                        <option value="2">2</option>
                       
                      </select> Records Per Page</label>
                        </span>
                    <span className="right">
                    <label id="up-display" className="title_contain6_sub">Search: <input type="text" id="search-top"/></label>
                    </span>
                    <br/>
                    <table id="customers3">
 <tr>
    <th>Serial <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>TxnID  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Date/Time  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Amount  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Address  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
    <th>Status  <i class="fas fa-caret-down"></i> <i class="fas fa-caret-up"></i></th>
  </tr>
  <tr>
    <td>1</td>
    <td>19/09/2021</td>
    <td>TRX 200.00</td>
    <td>Invest</td>
    <td>707123</td>
    <td>Debit</td>
    </tr>
    <tr>
    <td>2</td>
    <td>19/09/2021</td>
    <td>TRX 200.00</td>
    <td>Transfer In</td>
    <td>277538</td>
    <td>Credit</td>
    </tr>
    
  </table>
        
                    <span className="left"> 
                        <p className="title_contain6">Showing Page 1 of 1</p>
                        </span>
                    <span className="right">
                    <p id="down-show" className="title_contain6">Previous <button id="badge1">1</button> Next</p>
                    </span>
    
                </div>
            </div>
            </div>

            </div>
     
        
</>
    
    )};
export default ActivationWallet;
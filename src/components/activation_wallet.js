/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './pendingdepo.css'
import UpBar from "./UpBar";

const ActivationWallet = () =>{
    return(
        <>
        
        <UpBar/>

        <div className="container3">
            <div className="first_contain3">
            <div className="sub_first_contain3">
                <div className="title_contain3">
                    <h3>Activation Wallet Report of 707123 (Balance - TRX 0.00) </h3>
                    <br/>
                    <table id="customers" >
  <tr>
    <th>Serial</th>
    <th>TxnID</th>
    <th>Date/Time</th>
    <th>Amount</th>
    <th>Address</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>No Records Found</td>
    </tr>
  </table>
                    
                    <p className="title_contain2">Note:Do not Send Coins after 3 hours of creating the QR Code.
                    </p>
                </div>
            </div>
            </div>

            </div>
     
        
</>
    
    )};
export default ActivationWallet;
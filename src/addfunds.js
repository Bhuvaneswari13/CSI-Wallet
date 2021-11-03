import './App.css';
import { Button, Container,Col,Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="main1">
      <Container>
      <Row>
    <Col><div className="heading1">
       <h5>Welcome, seenivasan</h5></div>
    </Col>
    <Col className="userid">
    <button id="userbadge" class="btn btn-primary">
  UserId: <span class="badge badge-light">707123</span>
</button>
  </Col>
  </Row>
  <div class="jumbotron">
  <h6 class="heading2">Add Funds to Your Activation Wallet</h6>
  <br/>
  <Container>
  <form>
    <div class="form-group row">
    <label for="inputAmt" id="label1" class="col-sm-2 col-form-label">Enter Amount in (TRX) </label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputamt" placeholder=""/>
    </div>
  </div>
</form>
</Container>
<br/>
<div class="col-md-12 text-center">
<Button type="button" class="btn btn-primary">Submit</Button>
</div>
<br/>
<p class="heading4">Note: Once you press Submit, The system will show you the Tron Address to Transfer and the Required Amount of Trons to Transfer. Once you transfer,
    your wallet will be loaded automatically after the required number of confirmations. It may take some time for confirmations.
    Please send the exact amount of Coins shown in the next page</p>
  
</div>
</Container>

</div>
    </div>
  );
}

export default App;



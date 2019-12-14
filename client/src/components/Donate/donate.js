import React from 'react';
import './donate.css';
import PaypalButton from '../../components/Jobs/pay';
import axios from "axios";
import qr from '../../assets/images/donation.jpg';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {donationReq} from "../../actions/donationActions";
const CLIENT = {
  sandbox: 'AXLG5l9gXCMut3IBoDyqmqKyq0fP5tl4E1V_U0UInnEtNymfLXmNKVrMbDYL0Ehoelv98tYl3t-j-p8R',
  
};
const ENV = 'sandbox';


class donate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.auth.user.id,
      amount: '',
      date: Date.now(),
      donationExists:false,
      userDonation:[]

    };
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.loadDonationHistory();
  }
  
  handleChangeAmount = event => {
    this.setState({amount: event.target.value});
  };

 loadDonationHistory = async() => {
  await axios
  .get("/api/Donationdata/donationreq",{
    params: {
      id: this.props.auth.user.id
    }
}).then((response) => {
  const r = response.data;
  this.setState({userDonation:r,donationExists:true});
  
});



console.log(this.state.userDonation)
 }
  // onSubmit = async(e) => {
  //      e.preventDefault();
  //    } 

  render() {
    const { user } = this.props.auth;
    const onSuccess = async(payment) =>{
      if (this.props.auth.isAuthenticated) {
        const reqBody = {
          userid: this.props.auth.user.id,
          amount: this.state.amount,
          date: Date.now(),
          donationExists:false
        }
        await axios.post('/api/Donationdata/donationreq', reqBody);
        this.loadDonationHistory();
        
      }
      else
        this.props.history.push("/login");
    
      console.log('Successful payment!', payment);
    }
    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);
    const   onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (
      <div id="donatebg">
      <div id ="title">
  <h4><q>No one is useless in this world who lightens the burdens of another.</q></h4>
  </div>
      <div><h1>                                                 </h1></div>
      <div class="row">
  <div class="column">
  <div id ="qr"><img src={qr} alt="qr"></img>
  </div>
  <div></div>
  <h1>Your Donations</h1>
        <div className="donation">
       
            <div className="donation-items">
            {this.state.donationExists ?
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Donation Amount</th>
                    <th>Donation Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.userDonation.map((donation) => {
                    return (
                      <tr key={donation.amount} >
                        <td></td>
                        <td>{donation.amount}</td>
                        <td>{donation.date}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table> :
              <h1>No Donations</h1>
            }
           
  <div class="column">
  
  </div>
  </div>
  </div>
  </div>
  <div><h1>                                                  </h1></div>
  <div id="dbtn">
      <form>
            <input type="text"name="Amount" placeholder="Amount" onBlur={this.onSubmit} onChange={this.handleChangeAmount} />
            <div><h1>                                                                                 </h1></div>
            
            
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={this.state.amount}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
        </form>
        </div>
      </div>
    );
    </div>
 ) }
}
donate.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  {  logoutUser }
)(donate);
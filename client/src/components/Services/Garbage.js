import React from 'react';
import './Services.css';
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import {Alert} from "react-bootstrap";
import { submitGarbageData } from "../../actions/garbageActions";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
    width: '80%',
    height: '80%',
    marginLeft: '-15px'
  };
class Garbage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userid: this.props.auth.user.id,wasteType: '', pickType: '', weight: '', time: '', alertS: false, alertF: false};
    
        this.handleChangeWaste = this.handleChangeWaste.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      buttonSet = (type) => {
        if(type === "pickup") {
            return (
                <div>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="11AM" onClick={this.handleTimeChange}>11AM</button>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="3PM" onClick={this.handleTimeChange}>3PM</button>
                </div>
            )
        } else if(type === "dropoff") {
            return (
            <div>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="10AM" onClick={this.handleTimeChange}>10AM</button>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="3PM" onClick={this.handleTimeChange}>3PM</button>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="7PM" onClick={this.handleTimeChange}>7PM</button>
                </div>
            )
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.wasteType!="" && this.state.weight !="") {
          const gData = {
            userid: this.props.auth.user.id,
            wasteType: this.state.wasteType,
            weight: this.state.weight
          };
          this.props.submitGarbageData(gData);
          this.setState({wasteType: '', weight: '', alertS: true});
        } else {
            this.setState({alertF: true});
        }
      }
    handleChange = (event) => {
        const {name, value} = event.target;
        let formErrors = this.state.formErrors;
    
        switch(name) {
          case "wasteType":
            //formErrors.month =  value.length > 0 ? "" : "Waste type cannot be empty";
            this.setState({wasteType: event.target.value})
            break;
          case "weight":
            // formErrors.year = value.length > 0 ? "" : "Weight cannot be empty";
            // if(value.length == 0){
            //   document.getElementById("inputY").style.borderColor = "red";
            // }else {
            //   document.getElementById("inputY").style.borderColor = "";
            // }
            this.setState({weight: event.target.value})
            break;
          default:
            break;
        }
        //this.setState({formErrors, [name]: value});
      };
    handleTimeChange(event) {
    this.setState({time: event.target.value});
    document.getElementById("time").innerHTML = "Pickup/Drop time set to " + event.target.value;
      }
      handleChangeWaste(event) {
        this.setState({wasteType: event.target.value});
      }
      handleChangeType(event) {
        this.setState({pickType: event.target.value});
        document.getElementById("time").innerHTML = "";
      }
      handleChangeWeight(event) {
        this.setState({weight: event.target.value});
      }
      closeAlertS = () => {
        this.setState({ alertS: false });
      }
      closeAlertF = () => {
        this.setState({ alertF: false });
      }
    render() {
        return (
            <div class="bg">
                {(this.state.alertS ? 
                (<Alert variant="success" onClose={() => this.closeAlertS()} dismissible>Request submitted successfully.</Alert>) 
                : '')}
                {(this.state.alertF ? 
                (<Alert variant="danger" onClose={() => this.closeAlertF()} dismissible>Please all fields.</Alert>) 
                : '')}
            <div class="container" id="backgroundImg">
<input class="plastic" name="wasteType" value="Plastic" onClick={this.handleChange}></input>
  <input class="metal" name="wasteType" value="Metal" onClick={this.handleChange}></input>
  <input class="paper" name="wasteType" value="Paper" onClick={this.handleChange}></input>

  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 col-form-label">Waste Type</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputWatt" value={this.state.wasteType} disabled/>
        </div>
        <label for="inputPassword" class="col-sm-2 col-form-label">Approximate weight</label>
    <div class="col-sm-10">
    <div class="input-group-append">
      <input type="number" name="weight"class="form-control" id="inputWatt" onChange={this.handleChange} min="1" max="20"/>
      <span class="input-group-text" id="inputGroupPrepend2">Kg</span>
      </div>
        </div>
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="pickup" onClick={this.handleChangeType}/>
  <label class="form-check-label" for="inlineRadio1">Pick-Up</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="dropoff" onClick={this.handleChangeType}/>
  <label class="form-check-label" for="inlineRadio2">Drop-Off</label>
</div>
{this.buttonSet(this.state.pickType)}
<div id="time"></div>
        </div>
        <button id="btnSub" type="button" class="btn btn-success" data-toggle="alert" onClick={this.onSubmit}>Submit</button>
        <hr></hr>
        <h3>Our Drop Off store location</h3>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 42.3367, lng:  -71.0875}}
        >
            <Marker position={{ lat: 42.3367, lng:  -71.0875}} />
        </Map>
        </div>
        </div>
        );
    }
};

Garbage.propTypes = {
    submitGarbageData: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { submitGarbageData, logoutUser }
  )(
    GoogleApiWrapper({
        apiKey: ("AIzaSyDiqjm-md1hFlBudX6E31MQiCWZNsqPgAA")
    })(Garbage)
)
import React from 'react';
import './Services.css';
import { Modal, Button } from 'react-bootstrap'

var divStyle;
class Garbage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {wasteType: '', pickType: '', weight: '', time: ''};
    
        this.handleChangeWaste = this.handleChangeWaste.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
      }
      buttonSet = (type) => {
        if(type == "pickup") {
            return (
                <div>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="11AM" onClick={this.handleTimeChange}>11AM</button>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="3PM" onClick={this.handleTimeChange}>3PM</button>
                </div>
            )
        } else if(type == "dropoff") {
            return (
            <div>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="10AM" onClick={this.handleTimeChange}>10AM</button>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="3PM" onClick={this.handleTimeChange}>3PM</button>
                <button type="button" class="btn btn-lg btn-danger button-spacing" value="7PM" onClick={this.handleTimeChange}>7PM</button>
                </div>
            )
        }
    }
    handleTimeChange(event) {
    this.setState({time: event.target.value});
      }
      handleChangeWaste(event) {
        this.setState({wasteType: event.target.value});
        // document.getElementById("backgroundImg").style.backgroundImage = "url('../../assets/images/plastic.jpg')";
        divStyle = {
            background: 'url("../../assets/images/plastic.jpg")'
        }
      }
      handleChangeType(event) {
        this.setState({pickType: event.target.value});
      }
      handleChangeWeight(event) {
        this.setState({weight: event.target.value});
      }
    render() {
        return (
            <div class="container" id="backgroundImg" style={divStyle}>
<input class="plastic" value="Plastic" onClick={this.handleChangeWaste}></input>
  <input class="metal" value="Metal" onClick={this.handleChangeWaste}></input>
  <input class="paper" value="Paper" onClick={this.handleChangeWaste}></input>

  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 col-form-label">Waste Type</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputWatt" value={this.state.wasteType} disabled/>
        </div>
        <label for="inputPassword" class="col-sm-2 col-form-label">Approximate weight</label>
    <div class="col-sm-10">
    <div class="input-group-append">
      <input type="number" class="form-control" id="inputWatt" onChange={this.handleChangeWeight} min="1" max="20"/>
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
        </div>
        <button type="button" class="btn btn-success" data-toggle="alert">Submit</button>
        </div>

        );
    }
};

export default Garbage;
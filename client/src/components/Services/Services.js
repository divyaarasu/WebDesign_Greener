import React from 'react';
import './Services.css';
import axios from "axios";
import rd3 from 'rd3';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { submitBill, getBillData } from "../../actions/billActions";
import { logoutUser } from "../../actions/authActions";
const BarChart = rd3.BarChart;
var barData = [];
var al = false;
const wattsRegExp =  /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/
// const formValid = ({formErrors, ...rest}) => {
//   let valid = true;

//   Object.values(formErrors).forEach(val => { 
//     val.length>0 && (valid = false);
//   });
//   console.log(valid);
//   return valid;
// };
// var barData = [
//   {
//     "values": [
//       { x: "January", y:  91},
//       { x: "March", y: 290},
//       { x: "May", y: 787},
//       { x: "Ap", y:  91},
//       { x: "Marddch", y: 290},
//       { x: "Mssay", y: 787},
//       { x: "Jansuary", y:  91},
//       { x: "Mxarch", y: 290},
//     ]
//   },
// ];
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.auth.user.id,
      month: '',
      year: '',
      watts: '',
      billData: [],
      formErrors: {
        month:'',
        year: '',
        watts: ''
      }
    };
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeWatts = this.handleChangeWatts.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.generateGraph = this.generateGraph.bind(this);
  }
  constructData(data) {
    barData = [];
    var vals = [];
    data.forEach(obj => {
      var data1 = {
        x: obj["month"] + " " + obj["year"],
        y: obj["watts"]
      }
      vals.push(data1);
    });
    var bar = {
      "values": vals
    }
    barData.push(bar);
    //console.log(barData);
    return barData;
  }
  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.month!="" && this.state.year !="" && wattsRegExp.test(this.state.watts)) {
      const billData = {
        userid: this.props.auth.user.id,
        month: this.state.month,
        year: this.state.year,
        watts: this.state.watts
      };
      this.props.submitBill(billData);
      this.setState = ({month: '', year: '', watts: ''});
      alert("Bill Data submitted successfully");
    } else {
      alert("Please fill all fields to submit bill data");
    }
  }

  generateGraph = (e) => {
    e.preventDefault();
    axios
    .get("/api/billData/submitbill",{
      params: {
        id: this.props.auth.user.id
      }
  }).then((response) => {
    const r = response.data;
    r.sort((a, b) => {
      return a.year - b.year;
    });
    this.setState({billData : r}, () => {
      this.constructData(this.state.billData);
      this.forceUpdate();
    })
  });
  }
  setShow = (b) => {

  }
  handleChange = (event) => {
    const {name, value} = event.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case "month":
        formErrors.month =  value.length > 0 ? "" : "Month cannot be empty";
        if(value.length == 0){
          document.getElementById("inputM").style.borderColor = "red";
        }else {
          document.getElementById("inputM").style.borderColor = "";
        }
        this.setState({month: event.target.value})
        break;
      case "year":
        formErrors.year = value.length > 0 ? "" : "Year cannot be empty";
        if(value.length == 0){
          document.getElementById("inputY").style.borderColor = "red";
        }else {
          document.getElementById("inputY").style.borderColor = "";
        }
        this.setState({year: event.target.value})
        break;
      case "watts":
        formErrors.watts = value>0 && wattsRegExp.test(value) ? "" : "Watts cannot be empty, negative numbers or contain special characters";
        // if(wattsRegExp.test(value)){
        //   document.getElementById("inputW").style.borderColor = "red";
        // }else {
        //   document.getElementById("inputW").style.borderColor = "";
        // }
        this.setState({watts: event.target.value})
          break;
      default:
        break;
    }
    this.setState({formErrors, [name]: value});
  };
  handleChangeMonth = event => {
    this.setState({month: event.target.value});
  };
  handleChangeYear = event => {
    this.setState({year: event.target.value});
  };
  handleChangeWatts = event => {
    this.setState({watts: event.target.value});
  };
    render() {
        return (
            <div class="container">
  <form>
  <div class="form-group">
    <label for="staticEmail" class="col-sm-2 col-form-label">Select Month</label>
    <div class="col-sm-10">
      <select id="inputM" name="month" class="form-control" value={this.state.month} onChange={this.handleChange}>
      <option></option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
      </select>
      <span id="errorMsg">{this.state.formErrors.month}</span>
    </div>
  </div>
  <div class="form-group">
    <label for="staticEmail" class="col-sm-2 col-form-label">Select Year</label>
    <div class="col-sm-10">
      <select id="inputY" name="year" class="form-control" value={this.state.year} onChange={this.handleChange}>
      <option></option>
      <option>2000</option>
      <option>2001</option>
      <option>2002</option>
      <option>2003</option>
      <option>2004</option>
      <option>2005</option>
      <option>2006</option>
      <option>2007</option>
      <option>2008</option>
      <option>2009</option>
      <option>2010</option>
      <option>2011</option>
      <option>2012</option>
      <option>2013</option>
      <option>2014</option>
      <option>2015</option>
      <option>2016</option>
      <option>2017</option>
      <option>2018</option>
      <option>2019</option>
      </select>
      <span id="errorMsg">{this.state.formErrors.year}</span>
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 col-form-label">Enter kWh</label>
    <div class="col-sm-10">
      <div class="input-group-append">
      <input type="number" name="watts" class="form-control" id="inputW" value={this.state.watts} onChange={this.handleChange}/>
          <span class="input-group-text" id="inputGroupPrepend2">kWh</span>
        </div>
        <span id="errorMsg">{this.state.formErrors.watts}</span>
    </div>
  </div>
  <button type="button" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
  <button type="button" class="btn btn-success" onClick={this.generateGraph}>Generate Graph</button>
</form>
<br></br>
<div>
<BarChart
  data={barData}
  width={1000}
  height={300}
  title="Bar Chart"
  xAxisLabel="Month"
  yAxisLabel="kWh"
  yAxisTickCount={6}
/>
</div>
</div>
        )
    }
};

Services.propTypes = {
  submitBill: PropTypes.func.isRequired,
  getBillData: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { submitBill, getBillData, logoutUser }
)(Services);



// // export default Services;
import React from 'react';
import './Services.css';
import rd3 from 'rd3';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { submitBill } from "../../actions/billActions";
import { logoutUser } from "../../actions/authActions";
const BarChart = rd3.BarChart;


var barData = [
  {
    "values": [
      { x: "January", y:  91},
      { x: "March", y: 290},
      { x: "May", y: 787},
      { x: "Ap", y:  91},
      { x: "Marddch", y: 290},
      { x: "Mssay", y: 787},
      { x: "Jansuary", y:  91},
      { x: "Mxarch", y: 290},
    
    ]
  },
];
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.auth.user.id,
      month: '',
      year: '',
      watts: ''
    };
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeWatts = this.handleChangeWatts.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = (e) => {
    e.preventDefault();
    const billData = {
      userid: this.props.auth.user.id,
      month: this.state.month,
      year: this.state.year,
      watts: this.state.watts
    };
    this.props.submitBill(billData);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);

  //   }

  handleChangeMonth = event => {
    this.setState({month: event.target.value});
    console.log(this.props.auth.user.id);
  };
  handleChangeYear = event => {
    this.setState({year: event.target.value});
  };
  handleChangeWatts = event => {
    this.setState({watts: event.target.value});
  };
    render() {
      const { user } = this.props.auth;
        return (
            <div class="container">
  <form>
  <div class="form-group needs-validation novalidate">
    <label for="staticEmail" class="col-sm-2 col-form-label">Select Month</label>
    <div class="col-sm-10">
      <select id="inputState" class="form-control" value={this.state.month} onChange={this.handleChangeMonth} required>
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
    </div>
  </div>
  <div class="form-group">
    <label for="staticEmail" class="col-sm-2 col-form-label">Select Year</label>
    <div class="col-sm-10">
      <select id="inputState" class="form-control" value={this.state.year} onChange={this.handleChangeYear} required>
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
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 col-form-label">Enter kWh</label>
    <div class="col-sm-10">
      <div class="input-group-append">
      <input type="number" class="form-control" id="inputWatt" value={this.state.watts} onChange={this.handleChangeWatts}/>
          <span class="input-group-text" id="inputGroupPrepend2">kWh</span>
        </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
  <button type="button" class="btn btn-success">Generate Graph</button>
</form>
<br></br>
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
        )
    }
};

Services.propTypes = {
  submitBill: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { submitBill, logoutUser }
)(Services);



// export default Services;
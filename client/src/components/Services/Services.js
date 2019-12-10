import React from 'react';
import './Services.css';
import rd3 from 'react-d3-library';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Services extends React.Component {
    render() {
        return (
            <div class="container">
  <form>
  <div class="form-group needs-validation novalidate">
    <label for="staticEmail" class="col-sm-2 col-form-label">Select Month</label>
    <div class="col-sm-10">
      <select id="inputState" class="form-control" required>
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
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Enter kWh</label>
    <div class="col-sm-10 input-group">
      <input type="number" class="form-control" id="inputWatt" />
      <div class="input-group-append">
          <span class="input-group-text" id="inputGroupPrepend2">kWh</span>
        </div>
    </div>
    <button type="button" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-success">Generate Graph</button>
  </div>
</form>
</div>
        )
    }
};

Services.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Services);



// export default Services;
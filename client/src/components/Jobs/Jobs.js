import {React,Component} from 'react';
import './Jobs.css';


function Jobs() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" noValidate className="" placeholder="First Name" name="firstName" onChange={this.handleChange}/>
                </div>
            </form>
        </div>
      </div>
    )};

export default Jobs;
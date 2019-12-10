import React from 'react';
import './Header.css';
import { Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { loginUser } from "../../actions/authActions";
//import classnames from "classnames";

class Header extends React.Component {
    constructor() {
        super();
      this.state = {
        rname: "",
        remail: "",
        rpassword: "",
        rpassword2: "",
        errors: {},

        lpassword: "",
        lemail: "",
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/services"); // push user to dashboard when they login
          }

        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

   onRegisterChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        
   };

   onLoginChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    
};

    onRegister = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.rname,
            email: this.state.remail,
            password: this.state.rpassword,
            password2: this.state.rpassword2
        };
        this.props.registerUser(newUser, this.props.history); 
        console.log(newUser);
    };

    onLogin = e => {
        e.preventDefault();
        const userData = {
            email: this.state.lemail,
            password: this.state.lpassword
        };
        this.props.loginUser(userData); 
        console.log(userData);
    };

    render() {        
    const { errors } = this.state;
        return (
            <div className="a">
                <Navbar className="nav" expand="md" sticky="top">
                    <Navbar.Brand className="navbarBrand" href="#home">Greener</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink className="navLink" to="/products">Products</NavLink>
                            <NavLink className="navLink" to="/services">Analysis</NavLink>
                            <NavLink className="navLink" to="/info">Awareness</NavLink>
                            <NavLink className="navLink" to="/jobs">Donate/Jobs</NavLink>
                            <NavLink className="navLink userIconList" to="#link"><i className="fa fa-user" data-toggle="modal" data-target="#userModal"><span className="badge badge-danger badgeClass">2</span></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        SignIn </button>
                    <i className="fa fa-user userIcon" data-toggle="modal" data-target="#userModal"><span className="badge badge-danger badgeClass">2</span></i>
                </Navbar>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="login-form">
                                    <form onSubmit={this.onLogin}>
                                        <div className="text-center social-btn">
                                            <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                            <a href="#" className="btn btn-info btn-block"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                                            <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                                        </div>
                                        <div className="text-center"><i><br /></i></div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                                <input type="email" className="form-control" 
                                                onChange={this.onLoginChange}
                                                value={this.state.lemail}
                                                error={errors.lemail}
                                                id="lemail"
                                                name="lemail" placeholder="Email" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                                <input type="password" className="form-control" 
                                                onChange={this.onLoginChange}
                                                value={this.state.lpassword}
                                                error={errors.lpassword}
                                                id="lpassword"
                                                name="lpassword" placeholder="Password" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
                                        </div>
                                        <div className="clearfix">
                                            <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                                            <a href="#" className="pull-right text-success" data-toggle="modal" data-target="#forgotPasswordModal" data-dismiss="modal">Forgot Password?</a>
                                        </div>

                                    </form>
                                    <div className="hint-text small">Don't have an account? <a href="#" data-toggle="modal" data-target="#registerModal" data-dismiss="modal" className="text-success">Register Now!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onRegister}>
                                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                                    <div className="form-group">
                                        <div className="col-xs-6"><input type="text"
                                            onChange={this.onRegisterChange}
                                            value={this.state.rname}
                                            error={errors.rname}
                                            id="rname"
                                            className="form-control" name="rname"
                                            placeholder="Name" required="required" /></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control"
                                            onChange={this.onRegisterChange}
                                            value={this.state.remail}
                                            error={errors.remail}
                                            id="remail"
                                            name="remail" placeholder="Email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                            onChange={this.onRegisterChange}
                                            value={this.state.rpassword}
                                            error={errors.rpassword}
                                            id="rpassword"
                                            name="rpassword" placeholder="Password" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                            onChange={this.onRegisterChange}
                                            value={this.state.rpassword2}
                                            error={errors.rpassword2}
                                            id="rpassword2"
                                            name="rpassword2" placeholder="Confirm Password" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                                    </div>
                                </form>
                            </div>

                            <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    loginUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
export default connect(
    mapStateToProps,
    { loginUser }
  )(withRouter(Header));

// export default Header;


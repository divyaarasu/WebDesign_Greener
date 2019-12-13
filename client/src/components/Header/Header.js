import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { logoutUser } from "../../actions/authActions";
//import classnames from "classnames";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            lpassword: "",
            lemail: "",
            errors: {},
            showModal: false 
        }
    }


    close(){
        this.setState({ showModal: false });
      }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            //this.props.history.push("/"); // push user to dashboard when they login
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onLoginChange = e => {
        this.setState({ [e.target.name]: e.target.value });

    };

    onLogin = e => {
        e.preventDefault();
        const userData = {
            email: this.state.lemail,
            password: this.state.lpassword
        };
        this.props.loginUser(userData);
        this.close();
    };

    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;
        return (
            <div className="a">
                <Navbar className="nav" expand="md" sticky="top">
                    <Navbar.Brand className="navbarBrand" href="/">Greener</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="navLink" href="/products">Products</Nav.Link>                            
                            <NavDropdown title={
                                <span className="navLink">Services</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/services">Bill Analyis</NavDropdown.Item>
                                <NavDropdown.Item href="/collection">Garbage Collection</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navLink" href="/info">Awareness</Nav.Link>
                            <Nav.Link className="navLink" href="/donate">Donate</Nav.Link>
                            <Nav.Link className="navLink" href="/jobs">Jobs</Nav.Link>
                            <Nav.Link className="navLink userIconList" to="#link"><i className="fa fa-user" data-toggle="modal" data-target="#userModal"><span className="badge badge-danger badgeClass">2</span></i></Nav.Link>
                        </Nav>

                        {(this.props.auth.isAuthenticated) ?
                            (<p className="navLink"> Hello, {user.name.split(" ")[0]}! <button type="button" className="btn btn-dark" onClick={this.onLogoutClick}>
                                Logout
                        </button></p>)
                            : (<button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                <i className="fa fa-user userIcon"></i> Sign In
                        </button>)}
                    </Navbar.Collapse>

                </Navbar>

                <div show={this.state.showModal} className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <div className="hint-text small">Don't have an account? <a href="/register">Register Now!</a></div>
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
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser, logoutUser }
)(withRouter(Header));



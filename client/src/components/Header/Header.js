import React from 'react';
import './Header.css';
import { Button, Navbar, Nav, NavDropdown, FormControl,Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    state = {
        register: {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }

    onRegisterChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onRegister = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };

    render() {
        return (
            <div className="a">
                <Navbar className="nav" expand="md" sticky="top">
                    <Navbar.Brand className="navbarBrand" href="#home">Greener</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink className="navLink" to="/products">Products</NavLink>
                            {/* <NavLink className="navLink" to="/services">Analysis</NavLink> */}
                            <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/services">Bill Analyis</NavDropdown.Item>
        <NavDropdown.Item href="/collection">Garbage Collection</NavDropdown.Item>
      </NavDropdown>
 
                            <NavLink className="navLink" to="/info">Awareness</NavLink>
                            <NavLink className="navLink" to="/jobs">Donate/Jobs</NavLink>
                            <NavLink className="navLink userIconList" to="#link"><i className="fa fa-user" data-toggle="modal" data-target="#userModal"><span className="badge badge-danger badgeClass">2</span></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        SignIn </button>
                    <i class="fa fa-user userIcon" data-toggle="modal" data-target="#userModal"><span class="badge badge-danger badgeClass">2</span></i>
                </Navbar>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="login-form">
                                    <form action="/examples/actions/confirmation.php" method="post">

                                        <div class="text-center social-btn">
                                            <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                            <a href="#" class="btn btn-info btn-block"><i class="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                                            <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
                                        </div>
                                        <div class="text-center"><i><br /></i></div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                                <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                                <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-success btn-block login-btn">Sign in</button>
                                        </div>
                                        <div class="clearfix">
                                            <label class="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                                            <a href="#" class="pull-right text-success" data-toggle="modal" data-target="#forgotPasswordModal" data-dismiss="modal">Forgot Password?</a>
                                        </div>

                                    </form>
                                    <div class="hint-text small">Don't have an account? <a href="#" data-toggle="modal" data-target="#registerModal" data-dismiss="modal" class="text-success">Register Now!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog " role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onCLick="onRegister">
                                    <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                                    <div class="form-group">
                                        <div class="col-xs-6"><input type="text"
                                            onChange={this.onRegisterChange}
                                            value={this.state.register.name}
                                            error={this.state.register.errors.name}
                                            id="name"
                                            class="form-control" name="name"
                                            placeholder="Name" required="required" /></div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control"
                                            onChange={this.onRegisterChange}
                                            value={this.state.register.email}
                                            error={this.state.register.errors.email}
                                            id="email"
                                            name="email" placeholder="Email" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control"
                                            onChange={this.onRegisterChange}
                                            value={this.state.register.password}
                                            error={this.state.register.errors.password}
                                            id="password"
                                            name="password" placeholder="Password" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control"
                                            onChange={this.onRegisterChange}
                                            value={this.state.register.password2}
                                            error={this.state.register.errors.password2}
                                            id="password2"
                                            name="password2" placeholder="Confirm Password" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <label class="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
                                    </div>
                                </form>
                            </div>

                            <div class="modal fade" id="forgotPasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
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

export default Header;


import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './../../actions/loginAction';


class Header extends Component {
    constructor(props) {
        super(props);

        this._handleLogout = this._handleLogout.bind(this);
    }

    _handleLogout() {
        this.props.dispatch(logout());
    }

    render() {
        const authetication = this.props.auth
                ?<Link to="/login"><button className="btn btn-danger navbar-btn">Login</button></Link>
                :<button className="btn btn-danger navbar-btn" onClick={this._handleLogout}>Logout</button>;

        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">React Redux</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><a href="#"></a></li>
                </ul>
                {authetication}
                </div>
            </nav>
        )
    }
}

function mapStateToProp(state) {
    return {
        auth: state.login
    }
}

export default connect(mapStateToProp, null)(Header);
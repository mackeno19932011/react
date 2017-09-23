import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
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
                <Link to="/login"><button className="btn btn-danger navbar-btn">Login</button></Link>
                </div>
            </nav>
        )
    }
}

export default Header;
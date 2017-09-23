import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginSubmit from './../../actions/loginAction';

import FormTextField from './../generals/FormTextField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(loginSubmit(this.state.email, this.state.password));
    }

    _handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    _handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    _isAuthenticate() {
        if (this.props.auth) {
            return 'Anthenticated';
        } else {
            return 'Not authenticated';
        }
    }

    render() {
        return (
            <div>
                <h2>{this._isAuthenticate}</h2>
                <form className="form-horizontal" onSubmit={this._handleSubmit} >
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <FormTextField 
                            type="email" 
                            value={this.state.email}
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                            handleChange={this._handleEmailChange} 
                            />
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10"> 
                        <FormTextField 
                            type="password" 
                            value={this.state.password}
                            className="form-control" 
                            id="password" 
                            placeholder="Enter password" 
                            handleChange={this._handlePasswordChange} 
                            />
                    </div>
                    </div>
                    <div className="form-group"> 
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                        </div>
                    </div>
                    </div>
                    <div className="form-group"> 
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return {
        auth: state.login
    }
}

export default connect(mapStateToProp, null)(Login);
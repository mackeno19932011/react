import React, { Component } from 'react';

const FormTextField = React.createClass({

    _handleChange: function(e) {
        this.props.handleChange(e);
    },

    render: function() {
        return <input type={this.props.type} 
                value={this.props.value} 
                className={this.props.className} 
                id={this.props.id} 
                placeholder={this.props.placeholder} 
                onChange={this._handleChange}
                 />
    }
});

module.exports = FormTextField;
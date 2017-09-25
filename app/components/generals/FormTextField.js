import React, { Component } from 'react';

class FormTextField extends Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        this.props.handleChange(e);
    }

    render() {
        return <input type={this.props.type} 
                value={this.props.value} 
                name = {this.props.name}
                className={this.props.className} 
                id={this.props.id} 
                placeholder={this.props.placeholder} 
                onChange={this._handleChange}
                 />
    }
}

FormTextField.defaultProps = {
    type: 'text',
    value: '',
    name: '',
    className: '__term',
    id: '__term',
    placeholder: 'Input here',
    onChange:'javascript:void(0)'
};

export default FormTextField;
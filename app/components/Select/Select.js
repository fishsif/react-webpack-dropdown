import React from 'react';
import './Select.css';
class Select extends React.Component {
    render() {
        return <div className="select" onClick={this.props.onClick}>{this.props.select}</div>;
    }
}
export default Select;
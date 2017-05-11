import React from 'react';
import './Search.css';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onInputChange(e.target.value);
    }

    render() {
        return <input type="text" className="search" value={this.props.searchText} onChange={this.handleInputChange}></input>;
    }
}
export default Search;
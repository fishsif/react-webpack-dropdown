import React from 'react';
import Select from '../Select/Select';
import DownBox from '../DownBox/DownBox';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          select: '请选择',
          searchText: '',
          down: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSelectClick = this.handleSelectClick.bind(this);
    }

    handleInputChange(searchText) {
        this.setState({
            searchText: searchText
        });
    }

    handleSelectChange(select) {
        this.setState({
            select: select
        });
    }

    handleSelectClick(e) {
        this.setState({
            down: !this.state.down
        });
    }

    render() {
        return (
            <div>
                <Select select={this.state.select} onClick={this.handleSelectClick}/>
                {this.state.down &&
                    <DownBox list={this.props.list} searchText={this.state.searchText} onInputChange={this.handleInputChange} onSelectChange={this.handleSelectChange} />
                }
            </div>
        );
    }
}
export default Dropdown;

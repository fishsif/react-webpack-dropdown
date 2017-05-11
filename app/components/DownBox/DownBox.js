import React from 'react';
import Search from '../Search/Search';
import './DownBox.css';
class DownBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e) {
        this.props.onSelectChange(e.target.innerText);
    }

    render() {
        let filterList = [];
        let listLen = this.props.list.length;
        if (this.props.searchText != '') {
            for (let i = 0; i < listLen; i++) {
                if (this.props.list[i].toLowerCase().indexOf(this.props.searchText.toLowerCase()) >= 0) {
                    filterList.push(<li className="item" key={this.props.list[i]} onClick={this.handleItemClick}>{this.props.list[i]}</li>);
                }
            }
        } else {
            for (let i = 0; i < listLen; i++) {
                filterList.push(<li className="item" key={this.props.list[i]} onClick={this.handleItemClick}>{this.props.list[i]}</li>);
            }
        }
        return (
            <div className="drop-box">
                <Search onInputChange={this.props.onInputChange}/>
                <ul>{filterList}</ul>
            </div>
        );
    }
}
export default DownBox;
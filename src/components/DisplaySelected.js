import '../App.css';
import React from 'react';

class DisplaySelected extends React.Component{
    render() {
        return (
            <div><p >Selected Type - {this.props.selectedCatName}</p></div>
        )
    }
}
export default DisplaySelected

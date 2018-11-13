import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class User extends Component{

   constructor() {
      super();
      
      this.state = {
         userData: [],
         uu: 'color changed to'
      }
      this.addNewUserHandler = this.addNewUserHandler.bind(this);
      this.removeUserHandler = this.removeUserHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);   
      this.changeColorHandler = this.changeColorHandler.bind(this);       
   }

    addNewUserHandler() {
        var dataSliced = this.state.userData.slice()
        var item = {
                    "id": dataSliced.length + 1,
                    "username": 'ddd',
                    "age": ((dataSliced.length + 1) * 10).toString()
                    };
        dataSliced.push(item);
        this.setState({userData: dataSliced})
    };

    removeUserHandler() {
        var dataSliced = this.state.userData.slice()
        this.setState({userData: dataSliced.splice(0, dataSliced.length - 1)})
    };

   findDomNodeHandler() {
      var myDiv = document.getElementById('name');
      ReactDOM.findDOMNode(myDiv).style = "background-color:white; color: red";
      this.setState({uu: "color changed to: red"})
   };

   changeColorHandler() {
      var myDiv = document.getElementById('name');
      ReactDOM.findDOMNode(myDiv).style = "background-color:red; color: white";
      this.setState({uu: "color changed to: white"})
   };

   render(){
      return(
            <div>
                <Header />
                <button onMouseOver = {this.findDomNodeHandler} onMouseOut = {this.changeColorHandler} id = "name">{this.state.uu}</button>
                <br></br>
                <button onClick = {this.addNewUserHandler}>+</button>
                <button onClick = {this.removeUserHandler}>-</button>
                <table>
                    <tbody>
                        <tr>
                        <td><u>Id</u></td>
                        <td><u>Name</u></td>
                        <td><u>Age</u></td>
                        </tr>
                        {this.state.userData.map(anyUser => <TableRow userData = {anyUser} />)}
                    </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h2>User Data</h2>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.userData.id}</td>
            <td>{this.props.userData.username}</td>
            <td>{this.props.userData.age}</td>
         </tr>
      );
   }
}

export default User;
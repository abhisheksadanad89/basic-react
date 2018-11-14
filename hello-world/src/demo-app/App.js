import React, { Component } from 'react';
class DemoApp extends Component{

   constructor() {
      super();
      this.hello = "Hello World";
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }

   render(){
      return(
         <div>
           <h3>BaseApp</h3>
            <table>
               <tbody>
               <tr>
               <td>Id</td>
               <td>Name : {this.hello}</td>
               <td>Age</td>
               </tr>
               {this.state.data.map(person => <TableRow data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default DemoApp;

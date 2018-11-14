import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from '../demo-app/App';
import BasicUser from '../basic-user/app_user';
import BasicEvent from '../basic-event/app_event';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class BasicIndex extends React.Component {
   render() {
      return (

<BrowserRouter>        
      <Switch> 
      <div>
        <table>
         <tr><td><Link to="/">Home</Link></td>
         <td> <Link to="/app">App</Link></td>
         <td><Link to="/user">User</Link></td>
         <td><Link to="/inputevent">Event</Link></td></tr>
        </table>
        <hr></hr>
        <Route path = "/app" component = {DemoApp} />
        <Route path = "/user" component = {BasicUser} />
        <Route path = "/inputevent" component = {BasicEvent} />     
     </div>
    </Switch>     
   </BrowserRouter>
      );
   }
}

export {BasicIndex, DemoApp, BasicUser, BasicEvent}

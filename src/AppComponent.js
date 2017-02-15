import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {Link} from 'react-router';

class AppComponent extends Component {
  render(props) {
    return (
      <div className="container">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">TrackerApp</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/BIC2-01.jpeg"
                height="150"
                width="150"
                alt="Big Auctions logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link nav-link-main mr-3" to="/about">
                    about
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link nav-link-main mr-3" to="/buy">
                    buy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link nav-link-main mr-3" to="/sell">
                    sell
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    type="button"
                    href="/login"
                    className="btn-blue ml-3 pr-3 pl-3"
                  >
                    Login
                  </a>
                </NavItem>
                <NavItem className="align-self-center">
                  <a href="/contact">
                    <i class="fa fa-envelope fa-2x ml-4 noLink" />
                  </a>
                </NavItem>
                <NavItem className="align-self-center">
                  <i class="fa fa-search fa-2x ml-4" />
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;

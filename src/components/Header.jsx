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
    this.showSearch = this.showSearch.bind(this);
    this.state = {
      isNavOpen: false,
      isShowSearch: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  showSearch() {
    this.setState({
      isShowSearch: !this.state.isShowSearch,
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
                  <NavLink className="nav-link nav-link-main mr-4" to="/about">
                    about
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link nav-link-main mr-4" to="/buy">
                    buy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link nav-link-main mr-4" to="/sell">
                    sell
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    type="button"
                    href="/login"
                    className="btn-blue noDec ml-3 mr-3 pr-4 pl-4"
                  >
                    Login
                  </a>
                </NavItem>
                <NavItem className="align-self-center">
                  <a href="/about#getInTouch">
                    <i class="fa fa-envelope fa-2x ml-4 noLink" />
                  </a>
                </NavItem>
                <NavItem className="align-self-center">
                  <i
                    onClick={this.showSearch}
                    class="fa fa-search fa-2x ml-5"
                  />

                  <div class="row">
                    <form>
                      <input
                        type="search"
                        id="s"
                        class="form-control"
                        placeholder="search"
                      />
                    </form>
                    <button type="submit" className="sbtn">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
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

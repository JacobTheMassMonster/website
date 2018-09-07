import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import "./NavBar.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skill from "../Skill/Skill";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Charles Chan</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Link className="NavBar-padding" to="/">
                  About
                </Link>
                <Link className="NavBar-padding" to="/Portfolio">
                  Portfolio
                </Link>
                <Link className="NavBar-padding" to="/Skill">
                  Skill
                </Link>
                <Link className="NavBar-padding" to="/Contact">
                  Contact
                </Link>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skill" component={Skill} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to={"/"}>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Code-Lab Movie Channel
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Login/Register</Button>
          <Navbar.Toggle />
        </div>
        {/* <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
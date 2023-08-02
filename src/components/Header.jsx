import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Link to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Code-Lab Movie Channel
          </span>
        </Link>
        <div className="flex md:order-2">
          <Button>Login/Register</Button>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;

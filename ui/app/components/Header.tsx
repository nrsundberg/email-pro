import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import Cookies from "js-cookie";

import logo from "../../public/logoForDark.png";
import { Link } from "@remix-run/react";

export type HeaderProps = {
  disableAccountButtons?: boolean;
};

export default function Header(props: HeaderProps) {
  Cookies.set("userId", "s3cr3t");

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link to="/" prefetch="intent">
          <img src={logo} alt="Email Pro logo" style={{ maxHeight: "60px" }} />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/#features" prefetch="intent">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/documentation" prefetch="intent">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/#integrations">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      {props.disableAccountButtons ?? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login" prefetch="intent">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              to="/create"
              prefetch="intent"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}

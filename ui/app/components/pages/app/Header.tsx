import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";

import { Link } from "@remix-run/react";

import logo from "@public/logoForDark.png";

import { HeaderFeatureDisable } from "types/wrapperTypes";

export type HeaderProps = {
  disableAccountButtons?: HeaderFeatureDisable;
};

export default function Header(props: HeaderProps) {
  // Cookies.set("userId", "s3cr3t");

  const ButtonsToDisplay = () => {
    switch (props.disableAccountButtons) {
      case HeaderFeatureDisable.LOGIN:
        return (
          <NavbarContent justify="end">
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
        );
      case HeaderFeatureDisable.SIGNUP:
        return (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Button
                as={Link}
                color="primary"
                to="/login"
                prefetch="intent"
                variant="flat"
              >
                Login
              </Button>
            </NavbarItem>
          </NavbarContent>
        );
      default:
        return (
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
        );
    }
  };

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
      <ButtonsToDisplay />
    </Navbar>
  );
}

function Test() {
  return (
    <div
      className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0
     backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
    ></div>
  );
}

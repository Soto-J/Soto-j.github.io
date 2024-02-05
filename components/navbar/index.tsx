"use client";

import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["home", "projects", "about", "contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Portfolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link href={`/${item}`} color="foreground" className="capitalize">
              {item}
            </Link>
          </NavbarItem>
        ))}
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-6">
        <NavbarItem>
          <Link href="/" color="foreground">
            <BsLinkedin size={24} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" color="foreground">
            <BsGithub size={24} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

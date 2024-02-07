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
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["home", "projects", "about"];

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

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link href={`#${item}`} color="foreground" className="capitalize">
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
          <Link
            href="https://www.linkedin.com/in/john-soto90"
            color="foreground"
            target="_blank"
          >
            <BsLinkedin size={24} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://github.com/Soto-J"
            color="foreground"
            target="_blank"
          >
            <BsGithub size={24} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex items-center justify-start">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={`#${item}`}
              color="foreground"
              size="lg"
              className="w-full capitalize"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

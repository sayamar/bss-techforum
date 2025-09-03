// src/components/Header/Header.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Logo,
  NavWrapper,
  NavMenu,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownLink,
  Arrow,
  AuthButtons,
  ButtonWrapper,
  ThemeToggleBtn,
} from "./Header.styles";
import { logout } from "../../features/auth/authSlice";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header({ toggleTheme, isDark }) {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Hubs", link: "/hubs" },
    {
      label: "Products",
      children: [
        { label: "Microsoft 365", link: "/m365" },
        { label: "Windows", link: "/windows" },
        { label: "Microsoft 365 Copilot", link: "/copilot" },
        { label: "Microsoft Teams", link: "/teams" },
        { label: "Microsoft Security", link: "/security" },
        { label: "Azure", link: "/azure" },
      ],
    },
    ...(isAuthenticated ? [{ label: "Blogs", link: "/blogs" }] : []),
  ];

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <Navbar>
      {/* Left side: Logo + Navigation */}
      <NavWrapper>
        <Logo>
          <img
            src="https://global.fujifilm.com/themes/custom/fujifilm_com_g2/common/img/fujifilm_corporate_logo.svg"
            alt="Fujifilm"
          />
        </Logo>

        <NavMenu>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to={item.link || "#"}>
                {item.label}
                {item.children && (
                  <Arrow open={openDropdown === item.label}>▾</Arrow>
                )}
              </NavLink>

              {item.children && (
                <DropdownMenu open={openDropdown === item.label}>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <DropdownLink to={child.link}>{child.label}</DropdownLink>
                    </li>
                  ))}
                </DropdownMenu>
              )}
            </NavItem>
          ))}
        </NavMenu>
      </NavWrapper>

      {/* Right side: Auth + Theme Toggle */}
      <AuthButtons>
        {/* <ThemeToggleBtn onClick={toggleTheme}>
          {isDark ? <FaMoon size={18} /> : <FaSun size={18} />}
        </ThemeToggleBtn> */}

        {!isAuthenticated ? (
          <>
            <ButtonWrapper to="/register">Register</ButtonWrapper>
            <ButtonWrapper to="/signin">Sign in</ButtonWrapper>
          </>
        ) : (
          <ButtonWrapper
            as="button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </ButtonWrapper>
        )}
      </AuthButtons>
    </Navbar>
  );
}

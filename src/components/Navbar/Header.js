// src/components/Header/Header.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  NavMenu,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownLink,
  Arrow,
  AuthButtons,
  RegisterBtn,
  SignInBtn,
  ThemeToggleBtn,
} from "./Header.styles";
import { logout } from "../../features/auth/authSlice"; // import logout action

export default function Header({ toggleTheme, isDark }) {
  const dispatch = useDispatch(); // define dispatch
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
    // Only show Blogs if logged in
    ...(isAuthenticated ? [{ label: "Blogs", link: "/blogs" }] : []),
    // { label: "Events", link: "/events" },
  ];

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <Navbar>
      <NavMenu>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            onMouseEnter={() => item.children && handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to={item.link || "#"}>
              {item.label}
              {item.children && <Arrow open={openDropdown === item.label}>▾</Arrow>}
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

      <AuthButtons>
        <ThemeToggleBtn onClick={toggleTheme}>
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </ThemeToggleBtn>

        {!isAuthenticated ? (
          <>
            <RegisterBtn to="/register">Register</RegisterBtn>
            <SignInBtn to="/signin">Sign in</SignInBtn>
          </>
        ) : (
          <SignInBtn
            as="button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </SignInBtn>
        )}
      </AuthButtons>
    </Navbar>
  );
}

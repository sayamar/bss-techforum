import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"; // add this import
import {
  Navbar,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownLink,
  Arrow,
  AuthButtons,
  ButtonWrapper,
  HeaderLeft,
  HeaderRight
} from "./Header.styles";
import { logout } from "../../features/auth/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navItems = [
    // { label: "Home", link: "/" },
    // { label: "Tech Community", link: "/hubs" },
    {
      label: "Community",
      children: [
        { label: "ITES", link: "/blogs" },
        { label: "Guardia", link: "/guardia" },
        { label: "Microsoft", link: "/feed" },
        { label: "RTS", link: "/rts" },
        { label: "Xerox", link: "/Xerox" },
        { label: "All Forums", link: "/allforums" },
        { label: "All Topics", link: "/alltopics" },
      ],
    },
    // ...(isAuthenticated ? [{ label: "ITES Posts", link: "/blogs" }] : []),
    { label: "Shop", link: "/shops" },
  ];

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <Navbar>
      {/* Left: Logo + Customer Support Forum */}
      <HeaderLeft>
  <Logo as={Link} to="/">
    <img
      src="https://global.fujifilm.com/themes/custom/fujifilm_com_g2/common/img/fujifilm_corporate_logo.svg"
      alt="Fujifilm"
    />
  </Logo>
  <h2>Customer Support Forum</h2>
</HeaderLeft>

      {/* Right: Nav items + Auth buttons */}
      <HeaderRight>
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
          {!isAuthenticated ? (
            <ButtonWrapper to="/signin">Sign in</ButtonWrapper>
          ) : (
            <ButtonWrapper
              as="button"
              onClick={() => dispatch(logout())}
            >
              Logout
            </ButtonWrapper>
          )}
        </AuthButtons>
      </HeaderRight>
    </Navbar>
  );
}

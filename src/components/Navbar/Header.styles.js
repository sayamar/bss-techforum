import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  box-shadow: 0 2px 4px
    ${({ theme }) =>
      theme.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
  transition: background 0.3s ease, color 0.3s ease;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  img {
    height: 32px; /* Adjust logo size */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const NavItem = styled.li`
  position: relative;
  &:hover > ul {
    display: block;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  padding-bottom: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Arrow = styled.span`
  margin-left: 4px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 20px;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid #ccc;
  padding: ${({ theme }) => theme.spacing(1)};
  display: none;
  list-style: none;
  min-width: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownLink = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ThemeToggleBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#222" : "#f0f0f0"};
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ButtonWrapper = styled(Link)`
  background: #0D0D0D;
  color: #fff;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.sm};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
  }
`;

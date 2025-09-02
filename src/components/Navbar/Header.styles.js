// src/components/Header/Header.styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  z-index: 999;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  box-shadow: 0 2px 4px
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,0.1)" /* light shadow for dark mode */
        : "rgba(0,0,0,0.1)"};
  transition: background 0.3s ease, color 0.3s ease;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const NavItem = styled.li`
  position: relative;

  /* Keep dropdown visible while hovering child */
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; /* underline effect */
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
  display: none; /* hidden by default */
  list-style: none;
  min-width: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  /* Prevent flicker when moving between parent and dropdown */
  z-index: 1000;
`;

export const DropdownLink = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

&:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; /* underline effect */
  }
`;


export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ThemeToggleBtn = styled.button`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#222" : "#f0f0f0"};
  }
`;

export const RegisterBtn = styled(Link)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.sm};
  text-decoration: none;
  &:hover {
    opacity: 0.9;
  }
`;

export const SignInBtn = styled(Link)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.sm};
  text-decoration: none;
  &:hover {
    opacity: 0.9;
  }
`;

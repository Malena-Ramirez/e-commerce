import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #2d3b4091;
`;

export const LogoHeader = styled.img`
  width: 12em;
  height: auto;
`;

export const MenuItem = styled.li`
  font-weight: bold;
  color: #dadada;
  &:hover{
    color: #ca1707;
  }
`;

export const ItemDropdown = styled.span`
  font-weight: bold;
  color: #dadada;
  &:hover{
    color: #ca1707;
  }
`;

export const ShoppingCartContainer = styled.div`
  font-size: 2rem;
  padding-right: 40px;
  color: #ca1707;
`;
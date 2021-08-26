import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #2d3b4091;
`;

export const LogoHeader = styled.img`
  width: 7em;
  height: auto;
  @media(min-width: 768px){
    width: 12em;
  }
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
  font-size: 1.5rem;
  padding-right: 20px;
  color: #ca1707;
  @media(min-width: 768px){
    font-size: 2rem;
    padding-right: 40px;
  }
`;
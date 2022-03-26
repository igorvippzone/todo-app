import styled from "styled-components";
import {colorApp} from "../../App.styles";

export const OrderListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const ListItemContainer = styled.li`
  color: #525252;
  font-size: 22px;
  font-weight: normal;
  
  &.active{
    font-weight: bold;
    color: ${colorApp.primary}
  }
`
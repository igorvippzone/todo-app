import styled from "styled-components";
import {colorApp} from "../../App.styles";

export const ListItemContainer = styled.li`
  color: #525252;
  font-size: 22px;
  font-weight: normal;
  
  &.active{
    font-weight: bold;
    color: ${colorApp.primary}
  }
`
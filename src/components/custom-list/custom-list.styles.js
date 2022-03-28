import styled from "styled-components"
import {colorApp} from "../../App.styles";

export const ListContainer = styled.ul`

  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: ${colorApp.primary} rgba(0, 0, 0, 0.14);

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.14);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colorApp.primary};
    border-radius: 20px;
  }
`
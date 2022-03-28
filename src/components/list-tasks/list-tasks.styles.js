import styled from "styled-components";


export const ListItemContainer = styled.li`
  
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: wrap;
  margin: 16px 0;
  padding: 5px 0;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  //width: 100%;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: rgba(255, 0, 0, 0.1);
  }
  
  @media (max-width: 599px) {
   
  }
`


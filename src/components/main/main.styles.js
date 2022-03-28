import styled from "styled-components";

export const MainContent = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 599px) {
    padding: 0 10px;
  }
`

export const Button = styled.button`
   display: none;
   margin: 10px 10px 0 0;
   align-self: flex-start;
   cursor: pointer;
  
   @media (max-width: 599px) {
     display: block;
   }
`

export const WrapperContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.h1`
   @media (max-width: 599px) {
     margin-top: 10px;
   }
`

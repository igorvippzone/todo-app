import styled from "styled-components";


export const SideMenuContainer = styled.div`
  max-width: 210px;
  width: 100%;
  border-right: 2px solid #D8D8D8;

  padding-left: 50px;


  @media (max-width: 599px) {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding: 0 10px;
    background-color: #fff;

    max-width: none;
    width: auto;
    flex-grow: 0;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 30%;

    transform: translateX(0);
    transition: transform .5s ease-in-out .1s;

    &.hidden {
      transform: translateX(-100%);
    }
    &::after {
      content: '';
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      bottom: 0;
      right: -150%;
      left: 100%;

      transition: right .5s ease-in-out;
    }
    &.hidden::after{
      right: 0;
      
    }
  }
`
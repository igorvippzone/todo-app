import styled from 'styled-components'

export const colorApp = {
    primary: '#EA5959',

}

export const AppContainer = styled.div`
  background-color: ${colorApp.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
`

export const BoardContainer = styled.div`
  background-color: #fff;
  max-width: 983px;
  width: 100%;
  max-height: 702px;
  height: 100%;
  border-radius: 8px;

  box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.59);
  
  display: flex;
  
`
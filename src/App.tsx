import React from 'react';

import {AppContainer, BoardContainer} from "./App.styles";
import SideMenu from "./components/side-menu/side-menu.component";
import Main from "./components/main/main.component";


class App extends React.Component {

    render() {
        return (
            <AppContainer>
                <BoardContainer>
                   <SideMenu />
                    <Main />
                </BoardContainer>
            </AppContainer>
        );
    }
}

export default App;

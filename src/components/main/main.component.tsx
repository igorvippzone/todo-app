import React, {FC} from "react";

import menuSVG from '../../assets/Menu.svg'

import {Button, MainContent, WrapperContainer,TitleContainer} from './main.styles'
import CustomInput from "../custom-input/custom-input.component";

import ListTasks from "../list-tasks/list-tasks.component";


const Main: FC = () => (
    <MainContent>
        <Button><img src={menuSVG} /></Button>
        <WrapperContainer>
            <TitleContainer>
                Все задачи
            </TitleContainer>
            <CustomInput />
            <ListTasks />
        </WrapperContainer>

    </MainContent>
)

export default Main;
import React, {FC} from "react";

import { MainContent } from './main.styles'
import CustomInput from "../custom-input/custom-input.component";
import ListTasks from "../list-tasks/list-tasks.component";

const Main: FC = () => (
    <MainContent>
        <h1>
            Все задачи
        </h1>
        <CustomInput />
        <ListTasks />
    </MainContent>
)

export default Main;
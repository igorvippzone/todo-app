import React, {FC} from "react";

import { SideMenuContainer } from "./side-menu.styles";
import CustomList from "../custom-list/custom-list.component";
import ListCategories from "../list-categories/list-categories.component";


const SideMenu: FC = () =>(
    <SideMenuContainer className='hidden'>
        <ListCategories />
    </SideMenuContainer>
)

export default SideMenu
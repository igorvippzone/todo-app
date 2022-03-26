import React, {FC} from "react";

import { SideMenuContainer } from "./side-menu.styles";
import Categories from "../categories/categories.component";

const SideMenu: FC = () =>(
    <SideMenuContainer>
        {/*<div style={{paddingTop:120, paddingBottom: 20}}><h2>Категории</h2></div>*/}
        <Categories />
    </SideMenuContainer>
)

export default SideMenu
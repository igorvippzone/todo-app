import React, {FC} from "react";

import { ListContainer } from './custom-list.styles'

const CustomList: FC = ({children}) => (
    <ListContainer>
        {children}
    </ListContainer>
)

export default CustomList;
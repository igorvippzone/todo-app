import React, {FC} from "react";
import {InputContainer} from "./custom-input.styles";

const CustomItem: FC = () => {

    return(
        <InputContainer placeholder='Добавить новую задачу в категорию "Все"' />
    )
}

export default CustomItem;
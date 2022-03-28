import React from "react";
import {ListItemContainer} from "./list-categories.styles";

import CustomList from '../custom-list/custom-list.component'
const ListCategories = () => {
    const categories = [
        'Все',
        'Покупки',
        'Учёба',
        'Работа', 'Все',
        'Покупки',
        'Учёба',
        'Работа', 'Все',
        'Покупки',
        'Учёба',
        'Работа', 'Все',
        'Покупки',
        'Учёба',  'Работа', 'Все',
        'Покупки',
        'Учёба',
        'Работа', 'Все',
        'Покупки',
        'Учёба',  'Работа', 'Все',
        'Покупки',
        'Учёба',
        'Работа', 'Все',
        'Покупки',
        'Учёба',

    ]
    return(
        <CustomList>
            {
                categories.map((category, key) => {
                    if(key === 0){
                        return <ListItemContainer className='active' key={key} >{category}</ListItemContainer>
                    } else {
                        return <ListItemContainer key={key}>{category}</ListItemContainer>
                    }
                })
            }
        </CustomList>
    )
}

export default ListCategories;
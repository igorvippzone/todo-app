import React from "react";
import {ListItemContainer, OrderListContainer} from "./categories.styles";

const Categories = () => {
    const categories = [
        'Все',
        'Покупки',
        'Учёба',
        'Работа',
    ]
    return(
        <OrderListContainer>
            {
                categories.map((category, key) => {
                    if(key === 0){
                        return <ListItemContainer className='active' key={key} >{category}</ListItemContainer>
                    } else {
                        return <ListItemContainer key={key}>{category}</ListItemContainer>
                    }
                })
            }
        </OrderListContainer>
    )
}

export default Categories;
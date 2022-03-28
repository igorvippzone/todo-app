import React from "react";
import {ListItemContainer} from "./list-tasks.styles";

import cartSVG from '../../assets/delete.svg'

import CustomList from "../custom-list/custom-list.component";

const ListTasks = () => {
    const tasks = [
        {
            title: 'Выучить React',
            id: 1,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Купить 2кг сахара',
            id: 2,
            category: 'Покупки',
            done: true,
        },
        {
            title: 'Устроится на работу в IT',
            id: 3,
            category: 'Работа',
            done: false,
        },
        {
            title: 'Почитать про TypeScript',
            id: 4,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Почитать про Redux',
            id: 5,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Выучить React',
            id: 1,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Купить 2кг сахара',
            id: 2,
            category: 'Покупки',
            done: true,
        },
        {
            title: 'Устроится на работу в IT',
            id: 3,
            category: 'Работа',
            done: false,
        },
        {
            title: 'Почитать про TypeScript',
            id: 4,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Почитать про Redux',
            id: 5,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Выучить React',
            id: 1,
            category: 'Учёба',
            done: false,
        },
        {
            title: 'Купить 2кг сахара',
            id: 2,
            category: 'Покупки',
            done: true,
        },
        {
            title: 'Устроится на работу в IT',
            id: 3,
            category: 'Работа',
            done: false,
        },
        {
            title: 'Почитать про TypeScript',
            id: 4,
            category: 'Учёба',
            done: false,
        },
        {
            title: '11111111 11111111111 111111111 11111 11111111 11111',
            id: 5,
            category: 'Учёба',
            done: false,
        },
    ]
    return (
            <CustomList>
                {
                    tasks.map((task, key) => {
                        return (
                            <ListItemContainer key={key}>
                                <input type='checkbox' defaultChecked={task.done}/>
                                <span style={{margin: "0 18px"}}>{task.title} </span>
                                <span style={{fontSize: '12px', backgroundColor: '#EA5959', maxWidth: '115px', width: '100%', padding: '5px 10px', color: '#fff', borderRadius: '8px', textAlign: 'center'}}>{task.category}</span>
                                <button style={{marginLeft:"auto", background: 'none', border: 'none'}}> <img src={cartSVG} /> </button>
                            </ListItemContainer>
                        )
                    })
                }
            </CustomList>
    )
}

export default ListTasks;
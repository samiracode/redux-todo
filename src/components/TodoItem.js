import React from 'react';
import { useDispatch } from 'react-redux';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core';
import { setCheck } from '../features/todoSlice';

function TodoItem({ name, done, id }) {
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));
    };

    return (
        <div className={`todoItem ${done ? 'todoItem--done' : ''}`}>
            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p>{name}</p>
        </div>
    );
}

export default TodoItem;


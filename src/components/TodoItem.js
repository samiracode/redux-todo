import React from 'react';
import { useDispatch } from 'react-redux';
import './TodoItem.css';
import { Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'; // Import the delete icon
import { setCheck, deleteTodo } from '../features/todoSlice'; // Import the deleteTodo action

function TodoItem({ name, done, id }) {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
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
            <IconButton
                onClick={handleDelete}
                aria-label="delete"
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default TodoItem;



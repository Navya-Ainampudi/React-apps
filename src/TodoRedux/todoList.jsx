import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from './todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const [editedText, setEditedText] = useState('');
    const [editModeId, setEditModeId] = useState(null);

    const handleEdit = (id) => {
        // Dispatch editTodo action here
        dispatch(editTodo({ id, newText: editedText }));
        // Clear the input field after edit
        setEditedText('');
        // Reset edit mode
        setEditModeId(null);
    };

    return (
        <div>
            {todos.map(todo => (
                <h6 key={todo.id}>
                    {editModeId === todo.id ? (
                        <div>
                            <input
                                type="text"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                            <button onClick={() => handleEdit(todo.id)}>Save</button>
                        </div>
                    ) : (
                        <div>
                            {todo.text}
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
                            <button onClick={() => {
                                // Set the id of the todo to enter edit mode
                                setEditedText(todo.text);
                                setEditModeId(todo.id);
                            }}>Edit</button>
                        </div>
                    )}
                </h6>
            ))}
        </div>
    );
};

export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todoList, deleteTodo, toggleTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  ) : (
    <p>Aucune tâche en cours </p>
  );
}

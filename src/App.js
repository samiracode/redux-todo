import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'



  

function App() {
  const todoList = useSelector(selectTodoList)

  // Separate completed and uncompleted tasks
  const completedTasks = todoList.filter(item => item.done);
  const uncompletedTasks = todoList.filter(item => !item.done);

  return(
    <div className="app">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {uncompletedTasks.map(item => (
            <TodoItem
              key={item.id} // Add a key prop to help React identify components
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
          
          {completedTasks.map(item => (
            <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  )


}

export default App;

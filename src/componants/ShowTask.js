import React from 'react'

const ShowTask = ({tasklist, setTaskList, task, setTask}) => {
  const handleEdit =(id) => {
    const selectedTask = tasklist.find(todo => todo.id === id)
    setTask(selectedTask)

  }
  const handleDelete =(id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !==id)
    setTaskList(updatedTaskList)
  }

  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasklist.length}</span>
            
            </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
          {tasklist.map((todo) => (
            <li key={todo.id}>
            <p>
              <span className='name'>{todo.name}</span>
              <span className='time'>{todo.time}</span>
            </p>
            <i onClick={() => handleEdit(todo.id)} className='bi bi-pencil-square'></i>
            <i onClick={() => handleDelete(todo.id)}className='bi bi-trash'></i>
            </li>

          ))}
        </ul>
    </section>
  )
}

export default ShowTask

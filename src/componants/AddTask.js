import React from 'react'

const AddTask = ({tasklist, setTaskList, task, setTask}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id){
      const date = new Date()
      const updateTaskList = tasklist.map((todo) => (
        todo.id === task.id ? {id: task.id, name:e.target.task.value, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }: todo
      ))
      setTaskList(updateTaskList)
      setTask({})
    } else {

      const date = new Date();
     
      const newTask = {  
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...tasklist, newTask])
      setTask({})
    }

  }
  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name || ""} autoComplete='off' placeholder='add task' maxLength="25" onChange={e => setTask ({...task, name:e.target.value})} />
            <button type='submit'>{task.id ? "update": "ADD" }</button>
        </form>

    </section>
  )
}

export default AddTask

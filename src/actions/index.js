let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

  export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })






// export const t = {
//     ADD_TASK: 'ADD_TASK',
//     COMPLETE_TASK: 'COMPLETE_TASK'
//   }
  
// export const addTask = title => ({
//         type : t.ADD_TASK ,
//         title
//     })
  
// export const  completeTask = id => ({
//       type: t.COMPLETE_TASK,
//       id
//     })
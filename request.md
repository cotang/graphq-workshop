query GetTodos{
  todos {
		id
    title
    completed
    steps{
      title
      completed
    }
  }
}

mutation UpdateTodos {
  updateTodo(id: 1, input: {
    title: "qwe", 
    completed: false,
    steps:[{
      title: "fdfdd",
      completed: true
    }]
  }) {
    id
    title
    completed
  }
  
  deleteTodo(id: 3)
}

mutation CreateTodo {
  createTodo(input: {
    title: "qwe2222222222", 
    completed: false,
    steps:[{
      title: "fdfdd",
      completed: true
    }]
  }) {
    id
    title
    completed
  }
}
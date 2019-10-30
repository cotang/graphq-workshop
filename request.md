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

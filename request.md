query GetTodos {
  todos {
    id
    title
    completed
    steps {
      title
      completed
    }
  }
}

mutation CreateTodos($input: TodoInput!) {
  createTodo(input: $input) {
    id
    title
    completed
  }
}

mutation UpdateTodos($input: TodoInput!) {
  updateTodo(id: "5dbae1d6a79f3e1974876ffb", input: $input) {
    id
    title
    completed
  }
}

mutation DeleteTodos {
  deleteTodo(id: "5dbaf864683a1b895c46f177")
}

===

query variables:

{
  "input": {
    "title": "Zxbcbvcfvcdfv"
  }
}
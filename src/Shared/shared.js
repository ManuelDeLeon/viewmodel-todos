import ViewModel from 'viewmodel-react';

ViewModel.share({
  todoList: {
    todos: [],
    filter: 'ALL',
    filtered() {
      switch(this.filter()) {
        case 'ALL': return this.todos();
        case 'ACTIVE': return this.todos().filter(t => !t.completed);
        case 'COMPLETED': return this.todos().filter(t => t.completed);
      default: throw new Error("Unknown filter: " + this.filter())
     }
    },
    addTodo(todo) {
      this.todos().push({
        text: todo,
        completed: false
      })
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.todos.changed();
    }
  }
})
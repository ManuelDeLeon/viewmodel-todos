Header({
  share: {
    todoList: 'todoList'
  },
  todo: '',
  addTodo() {
    if (!this.todo()) return;
    this.todoList.addTodo(this.todo());
    this.todo.reset();
  },
  render(){
    <form>
      <input type="text" b="value: todo, enter: addTodo" />
      <button type="button" b="click: addTodo">Add Todo</button>
    </form>
  }
})
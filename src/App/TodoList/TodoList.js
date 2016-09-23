TodoList({
  share: {
    todoList: 'todoList'
  },
  liStyle(completed) {
    return completed ? { 'text-decoration': 'line-through' } : undefined; 
  },
  render(){
    <ul>
      <li b="
        repeat: todoList.filtered, 
        text: repeatObject.text, 
        click: todoList.toggleTodo(repeatObject),
        style: liStyle(repeatObject.completed)" />
    </ul>
  }
})
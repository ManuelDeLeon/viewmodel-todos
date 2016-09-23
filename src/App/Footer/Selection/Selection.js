Selection({
  share: {
    todoList: 'todoList'
  },
  filter: '',
  label: '',
  showLink() {
    return this.todoList.filter() !== this.filter();
  },
  render() {
    <span>
      <a href="#" b="if: showLink, click: todoList.filter(filter), text: label" />
      <span b="if: !showLink, text: label" />
    </span>
  }
})
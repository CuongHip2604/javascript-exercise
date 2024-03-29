class Todo {
  date: number;
  works: string[];
  constructor(date: number, works: string[]) {
    this.date = date;
    this.works = works;
  }
}
class TodoList {
  todoList: Todo[] = [];
  constructor() {
    this.todoList = [];
  }
  addTodo(todo: Todo) {
    const index = this.todoList.findIndex((item) => item.date === todo.date);
    if (index === -1) {
      this.todoList.push(todo);
      console.log(`Ngay ${todo.date} co cong viec: ${todo.works}`);
    } else {
      console.log(`Cong viec ${todo.works} bi trung ngay`);
    }
  }
}

let todos = new TodoList();
let todo1 = new Todo(new Date("2023-03-22").getDate(), [
  "Studying",
  " Meeting",
]);
let todo2 = new Todo(new Date("2023-03-22").getDate(), ["Shopping", " Party"]);
let todo3 = new Todo(new Date("2023-03-23").getDate(), ["Camping", " Fishing"]);

todos.addTodo(todo1);
todos.addTodo(todo2);
todos.addTodo(todo3);
console.log(todos.todoList);

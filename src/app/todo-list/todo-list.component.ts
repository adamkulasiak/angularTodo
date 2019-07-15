import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title: string = 'Your todo list';
  todoList: string;

  todos: Array<Todo> = [
    {
      title: "test",
      completed: false
    },
    {
      title: "2 test",
      completed: true
    }
  ];

  addTodo() {
    if (!this.todoList) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoList,
      completed: false,
    };
    this.todos.push(newTodo);
    this.todoList = '';
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}

interface Todo {
  title: string,
  completed: boolean
}

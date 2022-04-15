import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Router} from '@angular/router';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  todoList: Todo[];
  // tslint:disable-next-line:variable-name
  private _id: number;

  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.findAll().subscribe(data => {
      this.todoList = data;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe();
  }
}

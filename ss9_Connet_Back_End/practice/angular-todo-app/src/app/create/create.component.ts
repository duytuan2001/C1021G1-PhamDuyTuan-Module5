import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createTodoForm: FormGroup;

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.createTodoForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl(),
    });
    this.createTodoForm.patchValue({
        complete: false
      }
    );
  }

  createTodo() {
    this.todoService.create(this.createTodoForm.value).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Todo} from '../todo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  todo: Todo[];

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
        this.todo = value;
      }, error => {
      },
      () => this.updateForm.patchValue(this.todo));
    this.updateForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  updateTodo() {
    this.todoService.update(this.updateForm.value).subscribe(() =>
      this.router.navigateByUrl(''));
  }
}

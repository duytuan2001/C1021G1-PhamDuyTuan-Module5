import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../service/todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
      this.todo = value;
    });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() =>
      this.router.navigateByUrl(''));
  }
}

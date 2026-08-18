import { Component } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter";

@Component({
  selector: 'app-task-list',
  imports: [TaskFilterComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {}

import { Component, inject } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter";
import { TaskService } from '../services/task';
import { Task } from '../models/task';
import { NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-task-list',
  imports: [TaskFilterComponent, CommonModule, FormsModule, RouterLink, NgClass],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  construtor() {}

  private taskService = inject(TaskService);

  tasks: Array<Task> = [];

  newTask = new Task();

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {

    this.taskService.addTask(this.newTask);

    this.newTask = new Task();
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  uppdateTask() {
    this.taskService.uppdateTask();
  }

  filterTasks(filter: string) {

    if (filter !== '') {
      this.tasks = this.tasks.filter(c => c.name.includes(filter))
    }
    else {
      this.tasks = this.taskService.getTasks();
    }
  }
}

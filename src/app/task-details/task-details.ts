import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  imports: [FormsModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {

  task?: Task;

  constructor() {}

  private route = inject(ActivatedRoute);

  private taskService = inject(TaskService);

  private router = inject(Router);

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.navigateBack();
    }
    else 
      {
        this.task = this.taskService.getById(+id);

        if (this.task === undefined) {
          this.navigateBack();
        }
    }
    
  }
 private navigateBack() {
    this.router.navigate(['/taskList'], {relativeTo: this.route});
  }

  save() {this.taskService.uppdateTask(); this.navigateBack();}

  cancel() {this.navigateBack();}
}


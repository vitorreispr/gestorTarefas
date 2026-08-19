import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  imports: [FormsModule],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
})
export class TaskFilterComponent {

  filter: string = '';

  @Output() taskFilter = new EventEmitter<string>();

  filterTask() {this.taskFilter.emit(this.filter)};
}

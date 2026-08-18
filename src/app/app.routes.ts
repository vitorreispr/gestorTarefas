import { Routes } from '@angular/router';
import { Tasklist } from './tasklist/tasklist';
import { TaskDetails } from './task-details/task-details';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de Tarefas', component: Tasklist},
    {path: 'taskDetails', title: 'Detalhes da Tarefa', component: TaskDetails},
    {path: '', redirectTo: 'taskList',pathMatch: 'full'}
];

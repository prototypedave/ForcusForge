import { Injectable } from '@angular/core';
import { TaskList } from './task-list';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  protected taskList: TaskList[] = [
    {
      id: 1,
      title: 'Prepare Presentation',
      micro: [
        { id: 1, name: 'Create slides', completed: false },
        { id: 2, name: 'Outline key points', completed: true }
      ]
    },
    {
      id: 2,
      title: 'Prepare Presentation Video',
      micro: [
        { id: 1, name: 'Create slides', completed: false },
        { id: 2, name: 'Outline key points', completed: true }
      ]
    },
  ];

  getAllTasks(): TaskList[] {
    return this.taskList;
  };

  getTasksById(id: number): TaskList | undefined {
    return this.taskList.find((taskList) => taskList.id === id);
  }
  constructor() { }
}

import { Routes } from '@angular/router';
import { WorkerComponent } from './worker/worker.component';
import { WorkersComponent } from './workers/workers.component';

export const routes: Routes = [
  {
    path: 'workers',
    component: WorkersComponent,
    children: [
      {
        path: ':workerId',
        component: WorkerComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workers',
  },
];

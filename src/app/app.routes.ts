import { Routes } from '@angular/router';
import { WorkerComponent } from './worker/worker.component';
import { WorkersComponent } from './workers/workers.component';

export const routes: Routes = [
  {
    path: 'workers/:workerId',
    children: [],
  },
  {
    path: 'workers/:workerId',
    component: WorkerComponent,
    outlet: 'worker',
  },
];

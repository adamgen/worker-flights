import { Routes } from '@angular/router';
import { WorkerComponent } from './workers/worker/worker.component';
import { WorkersComponent } from './workers/workers.component';
import { FlightInfoComponent } from './workers/worker/flight-info/flight-info.component';

export const routes: Routes = [
  {
    path: 'workers',
    component: WorkersComponent,
    children: [
      {
        path: ':workerId',
        component: WorkerComponent,
        children: [
          {
            path: ':flightId',
            component: FlightInfoComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workers',
  },
];

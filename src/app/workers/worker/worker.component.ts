import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { map, shareReplay, switchMap, tap, timer } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { Flights, WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent {
  columns = [
    'num',
    'from',
    'to',
    'from_date',
    'to_date',
    // 'workerId',
    // 'plane',
    // 'duration',
    // 'from_gate',
    // 'to_gate',
  ];

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    public workerService: WorkerService,
    private router: Router
  ) {
    workerService.workerFlights$ = this.activatedRoute.params.pipe(
      map((p) => p['workerId']),
      switchMap((workerId) => {
        const second = 1000;
        const minute = second * 60;
        return timer(0, minute).pipe(map(() => workerId));
      }),
      switchMap((workerId) => {
        return this.httpClient.get<Flights[]>(`/api/flights/${workerId}`).pipe(
          tap((flights) => {
            this.router.navigate(['workers', workerId, flights[0].num]);
          })
        );
      }),
      shareReplay(1)
    );
  }
}

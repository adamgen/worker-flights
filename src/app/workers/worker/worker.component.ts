import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, RouterLink, RouterOutlet } from "@angular/router";
import { map, switchMap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

interface Flights {
  workerId: number;
  num: string;
  from: string;
  to: string;
  from_date: string;
  to_date: string;
  plane: string;
  duration: number;
  from_gate: number;
  to_gate: number;
}

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatTableModule, RouterLink, RouterOutlet],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent {
  workerFlights$ = this.activatedRoute.params.pipe(
    map((p) => p['workerId']),
    switchMap((workerId) => {
      return this.httpClient.get<Flights[]>(`/api/flights/${workerId}`);
    })
  );

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
    private activatedRoute: ActivatedRoute
  ) {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent {
  worker$ = this.activatedRoute.params.pipe(
    map((p) => p['workerId']),
    switchMap((workerId) => {
      return this.httpClient.get<{ id: number; name: string }[]>(
        `/api/flights/${workerId}`
      );
    })
  );

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WorkerService } from './worker.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    MatProgressSpinnerModule,
  ],
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: [WorkerService],
})
export class WorkersComponent {
  workers$ = this.httpClient
    .get<{ id: number; name: string }[]>('/api/workers')
    .pipe(
      tap((workers) => {
        if (window.location.pathname.match(/^\/workers$/)) {
          this.router.navigate(['workers', workers[0].id]);
        }
      })
    );

  constructor(private httpClient: HttpClient, private router: Router) {}
}

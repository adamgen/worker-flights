import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WorkerService } from './worker.service';

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
  workers$ =
    this.httpClient.get<{ id: number; name: string }[]>('/api/workers');

  constructor(private httpClient: HttpClient) {}
}

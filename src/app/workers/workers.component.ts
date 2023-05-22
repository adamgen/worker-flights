import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLink, RouterOutlet],
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent {
  constructor(private httpClient: HttpClient) {}

  workers = this.httpClient.get<{ id: number; name: string }[]>('/api/workers');

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flights, WorkerService } from '../../worker.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [CommonModule, MatListModule, MatGridListModule],
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent {
  flightId$ = this.activatedRoute.params.pipe(
    map((p) => {
      return p['flightId'];
    })
  );
  mappedFlights$ = this.workerService.workerFlights$?.pipe(
    map((flights) =>
      flights.reduce<{ [key: string]: Flights }>((prev, next, arr) => {
        prev[next.num] = next;
        return prev;
      }, {})
    )
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    public workerService: WorkerService
  ) {}
}

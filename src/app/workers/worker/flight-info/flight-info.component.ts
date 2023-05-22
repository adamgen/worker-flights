import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent {
  constructor() {
    console.log('asdf');
  }
}

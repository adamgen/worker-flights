import { Observable } from 'rxjs';

export interface Flights {
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

export class WorkerService {
  workerFlights$?: Observable<Flights[]>;

  constructor() {}
}

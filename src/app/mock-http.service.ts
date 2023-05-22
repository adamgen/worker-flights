import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoints = {
  workers: ['Worker 1', 'Worker 2', 'Worker 3', 'Worker 4', 'Worker 5'],
} as const;

@Injectable({
  providedIn: 'root',
})
export class MockHttpService {
  constructor() {}

  get(path: keyof typeof endpoints) {
    return new Observable<(typeof endpoints)[keyof typeof endpoints]>(
      (subscriber) => {
        setTimeout(() => {
          subscriber.next(endpoints[path]);
        }, 250);
      }
    );
  }
  getWorkers() {}
}

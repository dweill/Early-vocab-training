import { Component } from '@angular/core';
import { range, Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Early-vocab-training';
  selectedAge: number;
  ages: Observable<number[]>;

  constructor() {
    this.ages = range(1, 115).pipe(map(num => num), toArray());
  }

  onAgeChange(age: number): void {
    this.selectedAge = age;
    console.log(this.selectedAge);
  }
}

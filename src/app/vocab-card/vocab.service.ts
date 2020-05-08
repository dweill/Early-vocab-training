import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor() { }

  getVocabByAge(age: number): any {
    return [
      { word: 'watch' },
      { word: 'way' },
      { word: 'we' },
      { word: 'wear' },
      { word: 'Wednesday' },
      { word: 'well' },
      { word: 'went' },
      { word: 'were' },
      { word: 'what' },
      { word: 'when' },
      { word: 'where' },
      { word: 'which' },
      { word: 'while' },
      { word: 'white' },
      { word: 'who' },
      { word: 'whole' },
      { word: 'why' },
      { word: 'will' },
      { word: 'wind' },
      { word: 'with' },
      { word: 'work' },
      { word: 'working' },
      { word: 'would' },
      { word: 'write' },
      { word: 'wrong' },
      { word: 'yellow' },
      { word: 'yes' },
      { word: 'yesterday' },
      { word: 'you' },
      { word: 'your' },
    ]
  }
}

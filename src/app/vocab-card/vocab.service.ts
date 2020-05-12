import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(private http: HttpClient) { }

  getVocabByAge(age: number): any {
    try {
      return this.http.get('http://localhost:4200/api/words', {params: { age: `${age}` }});
    } catch (e) {
      console.error(e);
    }
  }
}

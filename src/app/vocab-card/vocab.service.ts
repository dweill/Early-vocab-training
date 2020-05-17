import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VocabWord } from 'server/interfaces/vocab-words/vocab-word';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(private http: HttpClient) { }

  getVocabByAge(): any {
    try {
      return this.http.get('http://localhost:4200/api/words');
    } catch (e) {
      console.error(e);
    }
  }

  sayWord(vocabWord: VocabWord): any {
    const message = new SpeechSynthesisUtterance(vocabWord.word);
    this.speak(message);
  }
  speak(message: SpeechSynthesisUtterance): void {
    speechSynthesis.cancel();
    try {
      speechSynthesis.speak(message);
    } catch (e) {
      console.error(e);
    }
  }

  spellWord(vocabWord: VocabWord): void {
    // Speech synthesis api reads ! as a delay so I peppered it in to slow the spelling.
    const message = new SpeechSynthesisUtterance(`
    ${vocabWord.word},!
    ${vocabWord.word.split('').join(',!')},!
    ${vocabWord.word}`);
    this.speak(message);
  }

}

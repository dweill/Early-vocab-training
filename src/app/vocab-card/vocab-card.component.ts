import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vocab-card',
  templateUrl: './vocab-card.component.html',
  styleUrls: ['./vocab-card.component.scss']
})
export class VocabCardComponent implements OnInit {

  @Input()
  vocabWord: any;

  constructor() { }

  ngOnInit(): void {
  }

  sayWord(): void {
    const message = new SpeechSynthesisUtterance(this.vocabWord.word);
    this.speak(message);
  }

  spellWord(): void {
    const message = new SpeechSynthesisUtterance(`
    ${this.vocabWord.word},
    ${this.vocabWord.word.split('').join(',')},
    ${this.vocabWord.word}`);
    this.speak(message);
  }

  speak(message): void {
    try {
      speechSynthesis.speak(message);
    } catch (e) {
      console.error(e);
    }
  }

}

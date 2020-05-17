import { Component } from '@angular/core';
import { VocabService } from './vocab-card/vocab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Early-vocab-training';
  vocabWords: any = [];

  constructor(private vocabService: VocabService) {
    this.vocabWords = this.vocabService.getVocabByAge();
  }
}

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VocabWord } from 'server/interfaces/vocab-words/vocab-word';
import { VocabDialogComponent } from './vocab-dialog/vocab-dialog.component';
import { VocabService } from './vocab.service';

@Component({
  selector: 'app-vocab-card',
  templateUrl: './vocab-card.component.html',
  styleUrls: ['./vocab-card.component.scss']
})
export class VocabCardComponent {

  @Input()
  vocabWord: VocabWord;

  constructor(public dialog: MatDialog, private vocabService: VocabService) { }

  focusCard($event: MouseEvent): void {
    const dialogRef = this.dialog.open(VocabDialogComponent, {
      width: '50rem',
      height: '25rem',
      data: {vocabWord: this.vocabWord}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  sayWord($event: MouseEvent): void {
    $event.stopPropagation();
    this.vocabService.sayWord(this.vocabWord);
  }

  spellWord($event: MouseEvent): void {
    $event.stopPropagation();
    this.vocabService.spellWord(this.vocabWord);
  }



}

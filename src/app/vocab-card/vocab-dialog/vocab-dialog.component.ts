import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VocabWord } from 'server/interfaces/vocab-words/vocab-word';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-vocab-dialog',
  templateUrl: './vocab-dialog.component.html',
  styleUrls: ['../vocab-card.component.scss', './vocab-dialog.component.scss']
})
export class VocabDialogComponent {

  constructor(public dialogRef: MatDialogRef<VocabDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {vocabWord: VocabWord},
              private vocabService: VocabService) {}

              sayWord($event: MouseEvent): void {
                $event.stopPropagation();
                this.vocabService.sayWord(this.data.vocabWord);
              }

              spellWord($event: MouseEvent): void {
                $event.stopPropagation();
                this.vocabService.spellWord(this.data.vocabWord);
              }

}

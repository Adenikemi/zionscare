import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PageModalOptions } from '../../../general/page-modal.model';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-error-prompt',
  imports: [ CommonModule, NgIf ],
  templateUrl: './error-prompt.component.html',
  styleUrl: './error-prompt.component.scss'
})
export class ErrorPromptComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PageModalOptions, private dialog: MatDialog, private router: Router){}

  onContinue() {
    if (!this.data.actions?.continue) {
      this.data.route ? this.router.navigateByUrl(this.data.route) : ""
    } else {
      this.data.actions.continue();
    }
    this.dialog.closeAll();
  }
}

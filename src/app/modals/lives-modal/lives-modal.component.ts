import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lives-modal',
  templateUrl: './lives-modal.component.html',
  styleUrls: ['./lives-modal.component.scss']
})
export class LivesModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LivesModalComponent>) {}

  ngOnInit() {}

  actionFunction() {
    alert('You have logged out.');
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }
}

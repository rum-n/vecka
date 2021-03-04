import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.scss']
})
export class DayDialogComponent implements OnInit {
  fromPage: string;
  dailyTasksForm = new FormGroup({
    totalValueAccordingToInvoice: new FormControl('')
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DayDialogComponent>
    ) {
      this.fromPage = data;
     }

  ngOnInit(): void {
  }

  cancel() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you cancelled' })
  }

  confirm() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you confirmed' })
  }

}

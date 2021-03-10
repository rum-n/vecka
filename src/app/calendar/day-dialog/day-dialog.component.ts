import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.scss']
})
export class DayDialogComponent implements OnInit {
  fromPage: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DayDialogComponent>,
    ) {
      this.fromPage = data;
     }

  ngOnInit(): void {
    
  }

  public items = []; 
  public newTask; 
  public addToList() { 
      if (this.newTask == '') { 
      } 
      else { 
          this.items.push(this.newTask); 
          this.newTask = ''; 
      } 
  } 
  public deleteTask(index) { 
      this.items.splice(index, 1); 
  } 

  public cancel() {
    this.dialogRef.close({ data: 'you cancelled' })
  }

  public confirm() {
    this.dialogRef.close({ data: 'you confirmed' })
  }
}

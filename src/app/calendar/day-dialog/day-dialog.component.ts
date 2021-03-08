import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from './../../shared/models/task.model';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.scss']
})
export class DayDialogComponent implements OnInit {
  fromPage: string;
  dailyTasksForm: FormGroup;
  // arrayItems: {
  //   id: number;
  //   content: string;
  // }[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DayDialogComponent>,
    private formBuilder: FormBuilder
    ) {
      this.fromPage = data;
    //   this.dailyTasksForm = this.formBuilder.group({
    //     tasksArray: this.formBuilder.array([])
    //  });
    // this.dailyTasksForm = this.formBuilder.group({
    //   name: '',
    //   task: this.formBuilder.array([]) ,
    // });
     }

  ngOnInit(): void {
    // this.arrayItems = [];
  }
  
  public taskList: Task[] = []; 

  addTask() {
    this.taskList.push(new Task());
  }

  removeTask(index: number) {
    if (index > -1){
      this.taskList.splice(index, 1);
    }
  }

  cancel() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you cancelled' })
  }

  confirm() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you confirmed' })
  }

  // get tasksArray() {
  //   return this.dailyTasksForm.get('tasksArray') as FormArray;
  // }

//  addItem(item) {
//     this.arrayItems.push(item);
//     this.tasksArray.push(this.formBuilder.control(false));
//  }
//  removeItem() {
//     this.arrayItems.pop();
//     this.tasksArray.removeAt(this.tasksArray.length - 1);
//  }

}

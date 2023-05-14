
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core.service';
import {  ProjectService} from '../services/project.service';

@Component({
  selector: 'app-project-add-details',
  templateUrl: './project-add-details.component.html',
  styleUrls: ['./project-add-details.component.css']
})
export class ProjectAddDetailsComponent implements OnInit{
  projectForm: FormGroup;

   
  Reason:string[] = [
    'Business',
    'Personal',
  ];

  Type:string[] = [
    'External',
    'Internal',
  ];

  Division:string[] = [
    'Filters',
    'Filters1',
    'Filters2',
  ];

  Category:string[] = [
    'Quality A',
    'Quality B',
    'Quality C',
  ];

  Priority: string[] = [
    'High',
    'Low',
  ];

  Department:string[] = [
    'Financial',
    'HR',
    'Strategy',
  ];

 Location:string[] = [
    'Pune',
    'Mumbai',
    'Nashik',
  ];

  dataSource!: MatTableDataSource<any>;

  constructor(
    private _fb: FormBuilder,
    private _projectService: ProjectService,
    private _dialogRef: MatDialogRef<ProjectAddDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.projectForm = this._fb.group({
      Enter_project_theme:'',
      Reason: '',
      Type: '',
      Division: '',
      Category: '',
      Priority: '',
      Department: '',
      StartDate: '',
      EndDate: '',
      Location: '',
    });
  }

  ngOnInit(): void {
    this.projectForm.patchValue(this.data);
  }

  onFormSubmit() {
    // if (this.projectForm.valid) {
    //   if (this.data) {
    //     this._projectService
    //       .updateProject(this.data.id, this.projectForm.value)
    //       .subscribe({
    //         next: (val: any) => {
    //           this._coreService.openSnackBar('Project detail updated!');
    //           this._dialogRef.close(true);
    //         },
    //         error: (err: any) => {
    //           console.error(err);
    //         },
    //       });
    //   } else {
    //     this._projectService.addProject(this.projectForm.value).subscribe({
    //       next: (val: any) => {
    //         this._coreService.openSnackBar('Project added successfully');
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // }
    console.log(this.projectForm.value);
  }
}



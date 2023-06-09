import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core.service';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  projectForm: FormGroup;
 

  Reason: string[] = [
    'Business',
    'Personal',
  ];

  Type: string[] = [
    'External',
    'Internal',
  ];

  Divison: string[] = [
    'Filters',
    'Filters1',
    'Filters2',
  ];

  Category: string[] = [
    'Quality A',
    'Quality B',
    'Quality C',
  ];

  Priority: string[] = [
    'High',
    'Low',
  ];

  Department: string[] = [
    'Strategy',
    'Financial',
    'HR',
  ];

  Location: string[] = [
    'Pune',
    'Mumbai',
    'Nashik',
  ];


  dataSource!: MatTableDataSource<any>;

  constructor(
    private _fb: FormBuilder,
    private _projectService: ProjectService,
    private _coreService: CoreService,
    private router: Router
  ) {
    this.projectForm = this._fb.group({
      Textarea: '',
      Reason: '',
      Type: '',
      Divison: '',
      Category: '',
      Priority: '',
      Department: '',
      startDate:'',
      endDate:'',
      Location: '',
      Status: 'Registered',
    });
   

  }

  
  ngOnInit(): void { }

  public startDate:any;
  public endDate:any;

  validateDates() {
    const startDateControl = this.projectForm.get('startDate');
    const endDateControl = this.projectForm.get('endDate');
  
    if (startDateControl && endDateControl && startDateControl.value && endDateControl.value) {
      const startDate = new Date(startDateControl.value);
      const endDate = new Date(endDateControl.value);
  
      if (startDate > endDate) {
        endDateControl.setErrors({ endDateSmaller: true });
      } else {
        endDateControl.setErrors(null);
      }
    }
  }
 
  public onFormSubmit() {
    this.validateDates(); `` // Perform date validation
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
      this._projectService.addProject(this.projectForm.value).subscribe(() => {
        this._coreService.openSnackBar('Project added successfully');
      });
    }
  }
  
  public onFormSubmit1() {
    this.validateDates(); // Perform date validation
    if (this.projectForm.valid) {
    console.log(this.projectForm.value);
    this._projectService.addProject(this.projectForm.value).subscribe(() => {
      this._coreService.openSnackBar('Project added successfully');

    },

    );
  }
}

public openDashboard() {
  this.router.navigate(['chart'])
}

public showProjectList() {

  this.router.navigate(['list']);
}

public logout() {
  this.router.navigate([''])
}

}

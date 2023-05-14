
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  ProjectAddDetailsComponent} from '../project-add-details/project-add-details.component'
import { ProjectService } from '../services/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core.service';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent {


  // Options=['Project Name','StartDate','Reason','Type','Division','Category','Priority','Department','Location']

  // public selectedOptions:string=";"
  displayedColumns: string[] = [
    'Project Name',
    'Reason',
    'Type',
    'Division',
    'Category',
    'Priority',
    'Department',
    'Location',
    'Status',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: ProjectService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getProjectList();
  }

  openAddEditProjectForm() {
    const dialogRef = this._dialog.open(ProjectAddDetailsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProjectList();
        }
      },
    });
  }

  getProjectList() {
    this._empService.getProjectList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProject(id: number) {
    this._empService.deleteProject(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getProjectList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ProjectAddDetailsComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProjectList();
        }
      },
    });
  }
}

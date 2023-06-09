import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component {

  displayedColumns: string[] = [
    'Textarea',
    'Reason',
    'Type',
    'Divison',
    'Category',
    'Priority',
    'Department',
    'Location',
    'Status',
    'action',
  ];
  displayTextarea:string[]=[
    'Textarea',
  ];
  displayReason:string[]=[
    'Reason',
  ];
  displayType:string[]=[
    'Type',
  ];
  displayDivison:string[]=[
    'Divison',
  ];
  displayCategory:string[]=[
    'Category',
  ];
  displayPriority:string[]=[
    'Priority',
  ];
  displayDepartment:string[]=[
    'Department',
  ];
  displayLocation:string[]=[
    'Location',
  ];
  displayStatus:string[]=[
    'Status',
  ];

  userdata: any = [];
  dataSource!: MatTableDataSource<any>;
  // dataSource1: MatTableDataSource<any> = new MatTableDataSource<any>([]);



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    // private _dialog: MatDialog,
    private ProjectService: ProjectService,
    private _coreService: CoreService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.getProjectList();

  }
  startclick(_id: any) {

    this.ProjectService.UpateStatusStart(_id).subscribe((res: any) => {
      console.log(res.message);
      console.log("updated successfully");
      this.getProjectList();

    })
      
    }




  closeclick(_id: any) {
    console.log("Close clicked");

    this.ProjectService.UpateStatusClose(_id).subscribe((res: any) => {
      console.log(res.message);
      console.log("updated successfully");
      this.getProjectList();
    })
  }

  cancelclick(TextArea: any) {
    console.log("cancel clicked");
    console.log(TextArea);
    this.ProjectService.UpateStatusCancel(TextArea).subscribe((res: any) => {
      console.log(res.message);
      this.getProjectList();
    })

  }

  getProjectList() {
    this.ProjectService.getProjectList().subscribe((res: any) => {
      this.userdata = res.data;
      console.log(this.userdata);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openDashboard() {
    this.router.navigate(['chart'])
  }

 public openProjectForm() {
    this.router.navigate(['add-project']);
  }

  public logout() {
    this.router.navigate(['/'])
  }
}






 
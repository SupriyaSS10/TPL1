import { Component,OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';

import { ProjectService } from './services/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core.service';
import{ProjectAddDetailsComponent } from './project-add-details/project-add-details.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  displayedColumns: string[] = ['textarea', 'Reason', 'Type','Division','Category','Priority','Deparment','StartDate','EndDate'];
  dataSource!: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    
  }

  
  }





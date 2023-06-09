import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectlistComponent } from '../projectlist/projectlist.component'
import { ProjectService } from '../services/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Chart, registerables } from 'node_modules/chart.js';
import { Router } from '@angular/router';
Chart.register(...registerables);


@Component({
  selector: 'app-current-details',
  templateUrl: './current-details.component.html',
  styleUrls: ['./current-details.component.css']
})

export class CurrentDetailsComponent {

  public closedprojects: number = 0;
  public cancelprojects: number = 0;
  public runningprojects: number = 0;
  public totalprojects: number = 0;

  public data: any;

  public TotalArray: Number[] = [];
  public CloseArray: Number[] = [];

  // public closedata: number[] = [];
  // public Totaldata: number[] = [];

  public myChart: any;

  constructor(

    private _projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.DisplayChart();
    this.getTotalprojects();
    this.getClosedprojects();
    this.getCancelprojects();
    this.getRunningprojects();
    this.chartData();
  }

  getTotalprojects() {

    this._projectService.countTotal().subscribe((res: any) => {
      this.totalprojects = res.data;
    }
    );
  }

  getClosedprojects() {
    this._projectService.countClosed().subscribe((res: any) => {
      this.closedprojects = res.data;
    }
    )
  }

  getCancelprojects() {
    this._projectService.countCancel().subscribe((res: any) => {
      this.cancelprojects = res.data;
    })
  }

  getRunningprojects() {
    this._projectService.countRunning().subscribe((res: any) => {
      this.runningprojects = res.data;
    })
  }


  chartData() {

    this._projectService.countCloseStr().subscribe((res: any) => {

      this.CloseArray.push(res.data);

      // console.log(this.TotalArray);
      this.DisplayChart();

    }
    )

    this._projectService.countCloseFin().subscribe((res: any) => {

      this.CloseArray.push(res.data);

      // console.log(this.TotalArray);
      this.DisplayChart();

    }
    )



    this._projectService.countCloseHr().subscribe((res: any) => {

      this.CloseArray.push(res.data);

      // console.log(this.TotalArray);
      this.DisplayChart();

    }
    )


    this._projectService.countTotalStr().subscribe((res: any) => {

      this.TotalArray.push(res.data);
      this.DisplayChart();
    });

    this._projectService.countTotalFin().subscribe((res: any) => {

      this.TotalArray.push(res.data);
      console.log(this.TotalArray);
      this.DisplayChart();
    });


    this._projectService.countTotalHr().subscribe((res: any) => {

      this.TotalArray.push(res.data);
      //  console.log(this.TotalArray);
      this.DisplayChart();
    });

  }


  DisplayChart() {

    console.log(this.TotalArray);

    if (this.myChart) {
      this.myChart.destroy();
    }

    this.myChart = new Chart("barchart", {
      type: 'bar',
      data: {
        labels: ['STR', 'FIN', 'HR'],
        datasets: [
          {
            label: 'Total Project',
            data: this.TotalArray,
            backgroundColor: 'blue',           
            barThickness: 16,
            barPercentage: 0.5,
          },
          {
            label: "Closed",
            data: this.CloseArray,
            backgroundColor: 'limegreen',
            barThickness: 16,
            barPercentage: 0.5,
          }

        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  public openProjectForm() {
    this.router.navigate(['add-project']);
    console.log("project form open");
  }

  public logout() {
    this.router.navigate(['']);
    console.log("logout successfully");
  }

  public showProjectList() {
    this.router.navigate(['list']);
    console.log("projectlist open");
  }

  public openProjectForm1() {
    this.router.navigate(['add-project']);
    console.log("project form open");
  }

  public logout1() {
    this.router.navigate(['']);
    console.log("logout successfully");
  }

  public showProjectList1() {
    this.router.navigate(['list']);
    console.log("projectlist open");
  }
}
import { Component ,OnInit} from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{


  public card1:any=[];

  constructor(private projectservice:ProjectService){

  }

  ngOnInit(): void {
    
    this.getProjectList();
  }
  
  
  
  
 public getProjectList(){

    this.projectservice.getProjectList().subscribe((res:any)=>{

      this.card1=res.data;

      console.log(this.card1);
    })
  }
  
}

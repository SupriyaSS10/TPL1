import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
// import { LoginModel } from './login.model';
// import { CurrentDetailsComponent } from '../current-details/current-details.component';

@Component({
  selector: 'app-login-resp',
  templateUrl: './login-resp.component.html',
  styleUrls: ['./login-resp.component.css']
})

export class LoginRespComponent {
  hide: boolean = false;
  public subscriber :any;
  data:any;
  status:any;


  constructor(private fb: FormBuilder,private http:HttpClient,
              private _projectService:ProjectService,
              private route:Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })  

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    
    console.log(this.loginForm.value);
    
    this._projectService.login(this.loginForm.value).subscribe((res:any)=>{
      this.data=res;
      this.status=res.status;
      if(res.status){
        this.route.navigate(['chart']);
        console.log("Login successfully");
      }
    
    
    else{
      console.log("Invalid credentials");
    }
  })
}
}
  

    
   
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
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
    
   
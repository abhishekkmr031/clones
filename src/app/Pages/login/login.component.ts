import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  token:string = "";
  

  OnSubmit(): void{
    if(this.username==="" || this.password===""){
      console.log("Password missing");
    }
    else{
      console.log("hurray logged in");
      console.log(this.getLoginInfo());
      this.redirectToHomePage();
    }

    this.clearForm();
  }

  redirectToHomePage(){
    // console.log(this.route);

    this.router.navigate(['/home'], {relativeTo:this.route});
  }

  clearForm(){
    this.username="";
    this.password="";
  }

  getLoginInfo(){
    this.httpClient.post("https://localhost:7178/login?UserName=admin&Password=admin", '')
    .subscribe(data=> {
      console.log(data);
    });
  }


  constructor(private router:Router,
    private route: ActivatedRoute,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

}

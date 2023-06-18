import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  

  OnSubmit(): void{
    if(this.username==="" || this.password===""){
      console.log("Password missing");
    }
    else{
      console.log("hurray logged in");
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


  constructor(private router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}

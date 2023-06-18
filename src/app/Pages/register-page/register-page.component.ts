import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  name: string = "";
  userName: string = "";
  email: string = "";
  password: string = "";
  confirmPassword = "";

  onSubmit() {

  }

  checkParametersValidity(): boolean {
    if (this.name === "") return false;
    if (this.userName === "") return false;
    if (this.email === "") return false;
    if (this.password === "") return false;
    if (this.confirmPassword === "") return false;

    return true;
  }

  arePasswordsEqual() {
    console.log(this.password == this.confirmPassword);
    let msg = document.getElementById("passwordMessage");
    if (this.password === this.confirmPassword) 
      if (msg !== null) msg.style.display = "none";
    
    if (this.password !== this.confirmPassword) 
      if (msg !== null) msg.style.display = "block";
  }

  OnRegister(){
    console.log("here");
    this.router.navigate(['/login'], {relativeTo:this.route});
  }

  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}

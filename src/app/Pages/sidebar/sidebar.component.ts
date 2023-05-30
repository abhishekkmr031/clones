import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  baseUrl:string = "assets/images/";
  images:string[] = ["black.png", "white.png", "full.png"];
  imgId:number = 1;
  url:string =this.baseUrl +  this.images[this.imgId];
  worklist_display:boolean = true;
  navbar_display:boolean = false;


  onSubmit(){
    // let x = document.getElementById("#username");
    // let un = "";
    // if(x!==null) un = x;
  }

  showWorkList(){
    let worklist = document.querySelector(".expand");
    console.log(worklist);
    if(worklist!==null && this.worklist_display) 
      worklist.classList.add('expand-active');
    else
      worklist?.classList.remove('expand-active');
    
    this.worklist_display = !this.worklist_display;
  }

  onClickOpenSidebar(){
    let navlist = document.querySelectorAll(".navbar");
    navlist.forEach(element => {
      if(element!==null) element.classList.add('active');
    });

    this.navbar_display = !this.navbar_display;

    if(!this.navbar_display) this.onClickCloseSidebar();

    
  }

  onClickCloseSidebar(){
    let navlist = document.querySelectorAll(".navbar");
    navlist.forEach(element => {
      if(element!==null) element.classList.remove('active');
    });
  }

  changePicture(){
    if(this.imgId>2) this.imgId=0;
    console.log(this.imgId);
    this.url =this.baseUrl +  this.images[this.imgId];
    this.imgId++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

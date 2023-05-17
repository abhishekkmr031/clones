import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    let modal = document.getElementById("#modal");
    if(modal!==null) modal.style.display = "none";
  }

}

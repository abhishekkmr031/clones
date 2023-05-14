import { ChangeDetectorRef, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { playerRecord } from './playerInterface';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})

export class QuizGameComponent implements OnInit, DoCheck {

  chosenColor: string = "#e66465";
  name: string = "";

  //wheel config
  title = 'wheel-game';
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  idToLandOn: any;
  wheelContentItems: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;

  players: playerRecord[] = [];

  constructor(private cf: ChangeDetectorRef) {
    this.players.push({ id: 1, Name: "Player 1", Color: "#ff0000" });
    this.players.push({ id: 2, Name: "Player 2", Color: "#3cb371" });
    this.players.push({ id: 3, Name: "Player 3", Color: "#ffa500" });
    this.players.push({ id: 4, Name: "Player 4", Color: "#6a5acd" });

  }
  ngDoCheck(): void {
    console.log("do check");
    console.log(this.players);
    this.refreshWheel();
    this.refreshWheel();
  }

  ngOnInit(): void {
    console.log("ngoninit()");
    this.prepareWheel()
    this.cf.detectChanges();
  }


  //#region ngx-wheel methods

  refreshWheel() {
    //re-assign variables
    this.reset();
    this.prepareWheel();

    //this.reset();
  }

  prepareWheel() {
    console.log("prepareWheel()");
    const colors = ['#FF0000', '#000000'];
    this.wheelContentItems = this.players.map((value) => ({
      fillStyle: value.Color,
      text: `${value.Name}`,
      id: value.id,
      textFillStyle: 'white',
      textFontSize: '16',
    }))
  }

  async spinWheel() {

    let prize: number = Math.floor(Math.random() * this.players.length);
    this.reset();
    await this.spin(prize);

  }

  reset() {
    this.wheel.reset();
  }
  before() {
    //this.isQuestionVisible = false;
  }

  after() {
    //this.players.splice(this.idToLandOn, 1);
    //this.reorderCollectionIndex(this.namedata);
    console.log("prize winner : " + this.players[this.idToLandOn].Name);
    this.prepareWheel();
    //this.displayQuestion();
  }

  async spin(prize: any) {
    this.idToLandOn = prize;
    await new Promise((resolve) => setTimeout(resolve, 1));
    this.wheel.spin();
  }

  onChangeColor(event: any) {
    console.log(event);
    console.log(event.tar)
  }

  onClickAddEntry() {
    this.players.push({ id: this.players.length + 1, Name: this.name, Color: this.chosenColor });
    console.log("add players");
    console.log(this.players);
  }

}

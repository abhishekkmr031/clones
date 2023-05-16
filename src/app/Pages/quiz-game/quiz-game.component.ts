import { ChangeDetectorRef, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { playerRecord } from './playerInterface';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { HttpClient } from "@angular/common/http";
import { quizData } from './questionDataInterface';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})

export class QuizGameComponent implements OnInit {

  apiUrl: string = "assets/quiz2.json";
  // apiUrl: string = "https://v2weatherapi20230514192323.azurewebsites.net/api/Quiz";
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
  quizCollections: quizData[] = [];
  topics: string[] = [];
  currentTopic: string = "";
  currentQuestion: string = "";

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.players.push({ id: 0, Name: "Player 0", Color: "#eeb4c2" });
    this.players.push({ id: 1, Name: "Player 1", Color: "#ff0000" });
    this.players.push({ id: 2, Name: "Player 2", Color: "#3cb371" });
    this.players.push({ id: 3, Name: "Player 3", Color: "#ffa500" });
    this.players.push({ id: 4, Name: "Player 4", Color: "#6a5acd" });

    this.prepareWheel();
    this.getData();
  }

  getData() {
    this.httpClient.get<quizData[]>(this.apiUrl).subscribe(data => {
      this.quizCollections = data;
      this.initializeQuizzes();

    });
  }

  initializeQuizzes() {
    this.quizCollections.forEach(element => {
      if (this.topics.findIndex(topic => topic == element.topic) == -1) {
        this.topics.push(element.topic);
      }
    });
  }

  //#region ngx-wheel methods

  refreshGame() {
    //re-assign variables
    this.reset();
    this.prepareWheel();
    this.currentQuestion = "";

    //this.reset();
  }

  prepareWheel() {
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
    this.idToLandOn = Math.floor(Math.random() * this.players.length);
    this.reset();
    await this.spin();
  }

  reset() {
    this.wheel.reset();
  }
  before() {
    //this.isQuestionVisible = false;
  }

  after() {
    // console.log("prize winner : " + this.players[this.idToLandOn].Name);
    this.prepareWheel();
    this.displayQuestion();
  }

  displayQuestion() {
    if (this.currentTopic === "") {
      let random: number = Math.floor(Math.random() * this.quizCollections.length);
      // console.log(this.quizCollections[random].topic);
      this.currentQuestion = this.quizCollections[random].question;
    } else {
      let allQuestions = this.quizCollections.filter(value => value.topic === this.currentTopic);
      let random: number = Math.floor(Math.random() * allQuestions.length);
      // console.log(allQuestions[random].topic);
      this.currentQuestion = allQuestions[random].question;
    }
  }

  async spin() {
    await new Promise((resolve) => setTimeout(resolve, 1));
    this.wheel.spin();
  }

  onClickAddEntry() {
    this.players.push({ id: this.players.length + 1, Name: this.name, Color: this.chosenColor });
    this.refreshGame();
    this.refreshGame();
  }

}

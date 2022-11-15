import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {RestApiService} from "../services/rest-api.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-partecipate',
  templateUrl: './partecipate.component.html',
  styleUrls: ['./partecipate.component.css']
})
export class PartecipateComponent implements OnInit {

  public title: string = this.data.title;
  public mail: string = this.data.mail;
  public survey_id: number = this.data.id_survey;
  public error: string = "";
  public myvalue: string ="NA";
  public QnAs: QnA[] = [];
  public values: Question[]=[];
  public myoptions: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];



  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title: string,
    component: string,
    mail: string,
    id_survey: number,
  }, private ras: RestApiService, public dialogRef: MatDialogRef<PartecipateComponent>, public fb=FormBuilder) { }


  ngOnInit(): void {
    this.getQnA();

  }


  public async getQnA() {
    this.error = "";
    await this.ras.callApi('http://localhost:8080/surveyspring/api/survey-composition/' + this.survey_id ,'GET', '')
      .then((res) => {
        this.QnAs = res;
        let id_prec = 0;
        let q = new Question("", []);
        let check = false;
        for (let i = 0; i < this.QnAs.length; i++) {
          let id_question = this.QnAs[i].question_answer.id_question;
          if (id_question != id_prec) {
            if (check) this.values.push(q);
            check = true;
            id_prec = id_question;
            let question = this.QnAs[i].question_answer.question.question;
            q = new Question(question, []);
          }
          let answer = this.QnAs[i].question_answer.answer.answer;
          let id_question_answer= this.QnAs[i].question_answer.answer.id_question_answer;
          q.addAnswer(new Answer(answer,id_question_answer));
        }
        this.values.push(q);
      }).catch((err) => {
        this.error = "Cannot retrieve data";
      });
  }

  public close() {
    this.dialogRef.close();
  }
}


export interface QnA {
  id_survey: number;
  id_question_answer: number;
  question_answer: {
    id: number;
    id_question: number;
    id_answer: number;
    question: {
      id: number;
      question: string;
      categoryId: number;
      answers: ANSWER[];
      category: {
        id: number;
        name: string;
      }
    }
    answer: ANSWER;
  }
}

export interface ANSWER {
  id: number;
  answer: string;
  id_question_answer:number;
}

export class Question{
  public question: string="";
  public answers: Answer[]=[] ;

  constructor(question: string, answers: Answer[]) {
    this.question = question;
    this.answers = answers;
  }

  public addAnswer(answer: Answer){
    this.answers.push(answer);
  }
}

export class Answer{
  public answer: string="";
  public id_question_answer: number=0;


  constructor(answer: string, id_question_answer: number) {
    this.answer = answer;
    this.id_question_answer = id_question_answer;
  }
}

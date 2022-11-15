import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTemplateComponent } from "./dialog-template/dialog-template.component";
import { HomeComponent } from './home/home.component';
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterModule, Routes, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SurveyListComponent } from "./survey-list/survey-list.component";
import {PartecipateComponent} from "./partecipate/partecipate.component";
import {MatRadioModule} from '@angular/material/radio';
//import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

}




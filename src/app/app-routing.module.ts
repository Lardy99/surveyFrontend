import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import {RegisterComponent } from "./register/register.component";
import { MatIconModule } from "@angular/material/icon";
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { MatSelectModule } from '@angular/material/select';
import { SurveyListComponent } from "./survey-list/survey-list.component";
import { MatTableModule } from '@angular/material/table';
import { PartecipateComponent } from './partecipate/partecipate.component'
import {MatRadioModule} from '@angular/material/radio';
//import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'footer', component: FooterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: FirsthomeComponent},
  {path: 'survey-list', component: SurveyListComponent},
  {path: 'partecipate', component: PartecipateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

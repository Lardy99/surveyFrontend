import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule         } from './app-routing.module';
import { AppComponent             } from './app.component';
import { LoginComponent           } from './login/login.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatDialogModule          } from "@angular/material/dialog";
import { DialogTemplateComponent  } from './dialog-template/dialog-template.component';
import { HttpClientModule         } from "@angular/common/http";
import { MatCardModule            } from '@angular/material/card';
import { MatInputModule           } from '@angular/material/input';
import { MatIconModule            } from '@angular/material/icon';
import { MatButtonModule          } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SurveyListComponent } from "./survey-list/survey-list.component";
import { HomeComponent } from "./home/home.component";
import { PartecipateComponent } from "./partecipate/partecipate.component";
import { RegisterComponent } from './register/register.component';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogTemplateComponent,
    SurveyListComponent,
    HomeComponent,
    PartecipateComponent,
    RegisterComponent,
    FirsthomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

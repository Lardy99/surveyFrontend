import { Component, OnInit, Inject,  } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterModule, Routes, RouterOutlet, NavigationExtras } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DialogTemplateComponent } from '../dialog-template/dialog-template.component';
import { SurveyListComponent } from '../survey-list/survey-list.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mail : string= "";

  constructor(private route : ActivatedRoute,public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mail= params["mail"];
    });
  }

  openSurveyList() {
    let navigationExtras: NavigationExtras = {//Costruisco struttura da mandare alla pagina home
      queryParams: {
        "mail" : this.mail
      },
      skipLocationChange: true
    };
    this.router.navigate(['/survey-list'], navigationExtras);
  }

}

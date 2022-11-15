import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterModule, Routes, RouterOutlet, NavigationExtras } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DialogTemplateComponent } from '../dialog-template/dialog-template.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-firsthome',
  templateUrl: './firsthome.component.html',
  styleUrls: ['./firsthome.component.css']
})
export class FirsthomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) {
  }

  openLogin() {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.id = "login-component";
    config.height = "350px";
    config.width = "600px";
    config.data = {title: "Login", component: "login"};

    const dialogRef = this.dialog.open(LoginComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result["loginCheck"]) {
        let navigationExtras : NavigationExtras = {//Costruisco struttura da mandare alla pagina home
          queryParams : {
            'mail':result["mail"]
          },
          skipLocationChange : true
        };

        this.router.navigate(['/home'], navigationExtras); // mando info a home
      }

    });
  }
  openRegister() {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.id = "register-component";
    config.height = "350px";
    config.width = "600px";
    config.data = {title: "Register", component: "register"};

    const dialogRef = this.dialog.open(RegisterComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result ["registerCheck"]){
        let navigationExtras : NavigationExtras = {//Costruisco struttura da mandare alla pagina home
          queryParams : {
            'mail':result["mail"]
          },
          skipLocationChange : true
        };

        this.router.navigate(['/home'], navigationExtras); // mando info a home
      }
    });

  }


  ngOnInit(): void {
  }

}

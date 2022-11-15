import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from "../services/rest-api.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTemplateComponent } from "../dialog-template/dialog-template.component";
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterModule, Routes, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;
  public error: string = "";
  public hidePassword: boolean = true;

  constructor(private router: Router, private ras: RestApiService,
              public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      isAdmin: new FormControl('', [Validators.required])
    });
  }
  async register() {
    this.error = "";

    await this.ras.callApi('http://localhost:8080/surveyspring/api/users', 'POST', this.form.value)
      .then((res) => {
        this.dialogRef.close({'registerCheck': true, 'mail':this.form.value.mail});
      }).catch((err) => {
        this.error = "Utente non valido";
      });
  }

  public close() {
    this.dialogRef.close({'registerCheck': false, 'mail':this.form.value.mail});
  }
  public hasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }


}

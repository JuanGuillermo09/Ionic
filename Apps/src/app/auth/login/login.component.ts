import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IonImg, IonAvatar, IonList, IonItem, IonInput, IonTabButton, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonButton, IonTabButton, IonInput, IonItem, IonList, IonAvatar, IonImg , RouterModule],
})
export class LoginComponent   {

  constructor() { }


}

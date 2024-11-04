import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonImg, IonButton, IonItem, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonImg , IonButton,RouterModule],

})
export class RegistrarComponent   {

  constructor() { }



}

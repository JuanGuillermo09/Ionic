import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonImg, IonButton, IonItem, IonInput, IonCheckbox } from "@ionic/angular/standalone";


@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./olvido.component.scss'],
  standalone: true,
  imports:[IonImg, IonButton, IonItem, IonInput , RouterModule,IonCheckbox ],
})
export class OlvidoComponent  {

  constructor() { }
}

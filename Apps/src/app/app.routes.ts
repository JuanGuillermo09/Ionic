import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { OlvidoComponent } from './auth/olvido/olvido.component';

export const routes: Routes = [


  {path:"login", component: LoginComponent},
  {path: "registre", component : RegistrarComponent},
  {path: "olvido", component : OlvidoComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
      {path: "**", component: LoginComponent},

];

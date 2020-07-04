import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RecentsComponent } from './main/recents/recents.component';
import { CompletedComponent } from './main/completed/completed.component';
import { OngoinComponent } from './main/ongoin/ongoin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  {
    path: '',
    children: [
      { path: 'recents', component: RecentsComponent },
      { path: 'completed', component: CompletedComponent },
      { path: 'ongoing', component: OngoinComponent },
    ],
    component: MainComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

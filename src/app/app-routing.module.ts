import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RecentsComponent } from './main/recents/recents.component';
import { CompletedComponent } from './main/completed/completed.component';
import { OngoinComponent } from './main/ongoin/ongoin.component';
import { StatisticsComponent} from './main/statistics/statistics.component'

const routes: Routes = [
  { path: '', component: LoginComponent, },
  {
    path: ':council/:ward_no',
    children: [
      { path: '', redirectTo: 'recents', pathMatch: 'full' },
      { path: 'recents', component: RecentsComponent },
      { path: 'completed', component: CompletedComponent },
      { path: 'ongoing', component: OngoinComponent },
      { path: 'statistics', component: StatisticsComponent },
    ],
    component: MainComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

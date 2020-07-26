import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RecentsComponent } from './main/recents/recents.component';
import { CompletedComponent } from './main/completed/completed.component';
import { OngoinComponent } from './main/ongoin/ongoin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './main/statistics/statistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RecentsComponent,
    CompletedComponent,
    OngoinComponent,
    StatisticsComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
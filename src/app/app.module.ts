import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './portfolio/accounts/accounts.component';
import { TransfersComponent } from './portfolio/transfers/transfers.component';
import { BillPayComponent } from './portfolio/bill-pay/bill-pay.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LoginComponent,
    AccountsComponent,
    TransfersComponent,
    BillPayComponent,
    PortfolioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

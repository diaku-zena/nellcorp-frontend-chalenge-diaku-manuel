import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { DepositComponent } from './features/deposit/deposit.component';
import { WithdrawalComponent } from './features/withdrawal/withdrawal.component';
import { TransferComponent } from './features/transfer/transfer.component';
import { RefundComponent } from './features/refund/refund.component';
import { BalanceComponent } from './features/balance/balance.component';
import { TransactionHistoryComponent } from './features/transaction-history/transaction-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './shared/tabs/tabs.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    FeaturesModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    AsyncPipe,
    MatDividerModule
  ]
})
export class AppModule { }

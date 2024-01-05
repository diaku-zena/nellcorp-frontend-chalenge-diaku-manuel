import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { RefundComponent } from './refund/refund.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent,
    DepositComponent,
    WithdrawalComponent,
    TransferComponent,
    RefundComponent,
    BalanceComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeaturesRoutingModule,

    SharedModule,

    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,

    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    
  ]
})
export class FeaturesModule { }

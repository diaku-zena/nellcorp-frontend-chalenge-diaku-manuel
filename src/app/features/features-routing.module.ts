import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { RefundComponent } from './refund/refund.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  { path: 'deposit', component: DepositComponent },
  { path: 'withdrawal', component: WithdrawalComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'refund', component: RefundComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

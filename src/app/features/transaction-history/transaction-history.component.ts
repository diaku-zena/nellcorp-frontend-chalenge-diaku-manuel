import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  payments!: any[];
  isLoadingBalance = true;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getPayments().subscribe(data => {
      setTimeout(() => {
        this.payments = data;
        // this.formatarNumero(this.payments.balance);
        this.isLoadingBalance = false;
      }, 2000);
    });
  }

  formatarNumero(valor: number): string {
    return valor.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ').replace('.', ',');
  }

}

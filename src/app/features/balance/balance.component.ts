import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  account!: any;
  isLoadingBalance: boolean = true;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getAccountInfo().subscribe(data => {


      setTimeout(() => {
        this.account = data;
        this.formatarNumero(this.account?.account.balance);
        this.isLoadingBalance = false;
      }, 1500);
    });
  }

  formatarNumero(valor: number): string {
    return valor.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ').replace('.', ',');
  }
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent {
  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    const state = this.location.getState() as { navigationId: number };

    if (state.navigationId > 1) {
      this.location.back();
    } else {
      // Se não houver histórico, redirecione para a página inicial
      // Você pode substituir '/home' pelo caminho da sua página inicial
      this.router.navigateByUrl('/home');
    }
  }
}

import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';


export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Inicio', content: '<h2>ola, mundo!</h2>'},
          {label: 'Historico', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
}

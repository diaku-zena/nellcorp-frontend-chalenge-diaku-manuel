import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GoBackComponent } from './go-back/go-back.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    GoBackComponent

  ],
  imports: [
    CommonModule,
    RouterModule,

    MatTabsModule,
    MatIconModule,
    AsyncPipe,
    MatDividerModule,
    MatButtonModule,
    
  ],
  exports: [
    TabsComponent,
    GoBackComponent,

    MatTabsModule,
    MatIconModule,
    AsyncPipe
  ]
})
export class SharedModule { }

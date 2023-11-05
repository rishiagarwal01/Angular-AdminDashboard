import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { CardsComponent } from './cards/cards.component';
import { NgChartsModule } from 'ng2-charts';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { CardssidenavComponent } from './cardssidenav/cardssidenav.component';
import { TypoComponent } from './typo/typo.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashbaordComponent,
    CardsComponent,
    UserComponent,
    UsersigninComponent,
    UsersignupComponent,
    ButtonComponent,
    FormsComponent,
    CardssidenavComponent,
    TypoComponent,
    IconsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

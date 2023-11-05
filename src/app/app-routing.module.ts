import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { CardssidenavComponent } from './cardssidenav/cardssidenav.component';
import { TypoComponent } from './typo/typo.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {
    path:'users',
    component: UserComponent,
  },
  {
    path:'',
    component: DashbaordComponent,
  },
  {
    path:'signin',
    component: UsersigninComponent
  },
  {
    path:'signup',
    component: UsersignupComponent
  },
  {
    path:'button',
    component: ButtonComponent
  },
  {
    path:'forms',
    component: FormsComponent
  },
  {
    path:'cards',
    component: CardssidenavComponent
  },
  {
    path:'typo',
    component: TypoComponent
  },
  {
    path:'icons',
    component:IconsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

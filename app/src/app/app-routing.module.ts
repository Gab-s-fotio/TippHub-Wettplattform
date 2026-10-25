import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {MyCommunitysComponent} from "./Pages/my-communitys/my-communitys.component";
import {MyBetsComponent} from "./Pages/my-bets/my-bets.component";
import {ProfilePageComponent} from "./Pages/profile-page/profile-page.component";
import {LoginComponent} from "./Pages/login-register/login/login.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'my-communities', component: MyCommunitysComponent },
  { path: 'my-bets', component: MyBetsComponent },
  { path: 'profile-page', component: ProfilePageComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

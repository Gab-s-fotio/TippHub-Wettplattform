import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyCommunitysComponent } from './Pages/my-communitys/my-communitys.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MyBetsComponent } from './Pages/my-bets/my-bets.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';


import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommunityCardComponent } from './components/community-card/community-card.component';
import { LoginComponent } from './Pages/login-register/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    FooterComponent,
    MyCommunitysComponent,
    HomePageComponent,
    MyBetsComponent,
    ProfilePageComponent,
    HeaderComponent,
    SidebarComponent,
    CommunityCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

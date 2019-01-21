import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { MatchComponent } from './match/match.component';
import { NewMatchComponent } from './admin/new-match/new-match.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { InningComponent } from './admin/inning/inning.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentaryComponent } from './match/commentary/commentary.component';
import { PlayerComponent } from './admin/teams/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    MatchComponent,
    NewMatchComponent,
    TeamsComponent,
    InningComponent,
    ScorecardComponent,
    CommentaryComponent,
    PlayerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

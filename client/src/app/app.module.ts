import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { UsersComponent } from './users/users.component';

import { UserService } from "./users/user.service";
import { QuestionService } from "./questions/question.service"

import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

import { QuestionsComponent } from './questions/questions.component';
import { QuestionsCreateComponent } from './questions/questions-create/questions-create.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component'



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    QuestionsComponent,
    QuestionsCreateComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule, // <-- Include module in our AppModules
    AppRoutingModule 
  ],
  providers: [UserService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

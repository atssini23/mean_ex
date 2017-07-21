import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component'

import { QuestionsComponent } from './questions/questions.component'
import { QuestionsCreateComponent } from './questions/questions-create/questions-create.component'

const routes: Routes = [
     { path: "login", component: UsersLoginComponent },
     { path: "dashboard", component: UsersDashboardComponent },
     { path: "new_questions", component: QuestionsCreateComponent},
     { path: "questions/add", component: QuestionsCreateComponent},
     
     { path: "", pathMatch: "full", redirectTo: "/login"}     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

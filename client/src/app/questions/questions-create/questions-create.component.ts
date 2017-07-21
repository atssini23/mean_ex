import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from './../question';
import { QuestionService } from './../question.service';
import { User } from './../../users/user';
import { UserService } from './../../users/user.service'

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {
  new_question = new Question;
  current_user: User

  constructor(private _questionService: QuestionService,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    this._userService.logged_user()
    .then(data => {
      if (data) {
      this.current_user = data 
      } else {
        this._router.navigate(["/login"])
      }
    })
    .catch(err => {console.log(err)})
  }
  addQuestion(){
    this._questionService.create_question(this.new_question)
    .then(() => {this._router.navigate(["/dashboard"])})
    .catch((err) => {console.log(err)})
  }

}

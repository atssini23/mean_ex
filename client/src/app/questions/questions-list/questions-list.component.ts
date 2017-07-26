import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from './../question';
import { QuestionService } from './../question.service';

import { User } from './../../users/user';
import { UserService } from './../../users/user.service'

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: Array<Question> = []
  current_user: User
  user_answers = [];

  constructor(private _questionService: QuestionService,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    this._questionService.list_questions()
    .then(data => this.questions = data)
    .catch((err) => {console.log(err)})

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
  
  onSubmit() {
    this.current_user.score = 0
    for (let i= 0; i < this.user_answers.length; i++){
      if (this.user_answers[i] === "correct"){
        this.current_user.score++
      } 
    }
    this._userService.updateUser(this.current_user)
    .then(data => this._router.navigate(["/dashboard"]))
    .catch((err) => {console.log(err)})
  }


}

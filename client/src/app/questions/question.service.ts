import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Question } from './question';

@Injectable()
export class QuestionService {

    constructor(private _http: Http){ }

    create_question(question){
        return this._http.post('/question/add', question)
        .map(data => data.json())
        .toPromise()
    }
}
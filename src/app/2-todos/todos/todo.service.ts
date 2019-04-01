import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

    constructor(private http: HttpClient){}
    getTodos(): Observable<any> {
        return this.http.get('...').pipe(map(data => data)) ;
    }

    add(newTodo: any): Observable<any> {
        return this.http.post('...', newTodo).pipe(map(data => data)) ;
     }
}
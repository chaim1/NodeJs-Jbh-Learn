import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TodbService {

  constructor(private http: HttpClient) { }

  setToDataBace(UserData): Observable<string>{
    return this.http.post<string>(environment.link+'user',UserData);
  }
}
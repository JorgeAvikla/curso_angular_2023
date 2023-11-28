import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from 'src/app/interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  getCurrentUser(): User|undefined {
    if(!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(emal: string, password: string):Observable<User> {
    // se hac epeticoj poara validar  usario
    return this.http.get<User>(`${ this.baseUrl }/users/1`)
    .pipe(
      tap(user=>this.user = user),
      tap(user => localStorage.setItem('token', 'hlsdhjfklsdfsdf.12312adssasad.3asdq21dsfsdf'))
    );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }

}

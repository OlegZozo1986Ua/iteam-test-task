import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { IApiResponse, IAssessment, IUser } from '../components/dashboard/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  public set apiResponse(value: IApiResponse) {
    localStorage.setItem('apiResponse', JSON.stringify(value))
  }

  public get apiResponse() {
    return JSON.parse(localStorage.getItem('apiResponse')!) as IApiResponse
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(email: string, password: string) {
    this.http.post<IApiResponse>('https://user-assessment-api.vercel.app/api/login', {email: email, password: password})
      .pipe(first())
      .subscribe((res: IApiResponse) => {
          this.apiResponse = res;
          this.router.navigate(['dashboard/userassessments'])
        });
  }

  public getUserAssessments(): Observable<IAssessment[]> {
    return this.http.get<IAssessment[]>('https://user-assessment-api.vercel.app/api/userassessments')
      .pipe(first())
  }

  public getUsersList(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://user-assessment-api.vercel.app/api/users')
      .pipe(first())
  }

  public getUserGraph(id: number) {
    return this.http.get(`https://user-assessment-api.vercel.app/api/userassessments/graph?id=${id}`)
      .pipe(first())
  }

  public logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}

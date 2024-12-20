// src/app/services/cona-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConaApiService {
  private apiUrl = environment.apiUrl; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { question };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
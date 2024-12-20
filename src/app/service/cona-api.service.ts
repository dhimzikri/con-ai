// src/app/services/cona-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConaApiService {
  private apiUrl = 'http://172.16.6.85:5051/ask'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { question };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
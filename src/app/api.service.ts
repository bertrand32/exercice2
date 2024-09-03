import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';
  private apiKey = 'yBzg6u26AreVA+q9WHv0bw==SV7nvfNqgWOYaN7o';

  constructor(private http: HttpClient) { }
  getCollections(){
  const header= new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key' : 'xlHazM4O0McLaBqgIKvnvw==dm9gAF1OnRmjUgc2'

  })
  return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {headers:header})
}

  // getCollections(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-API-Key': this.apiKey
  //   });
  //   return this.http.get(`${this.apiUrl}/collections`, { headers });
  // }

  getMenProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey
    });
    return this.http.get(`${this.apiUrl}/men`, { headers });
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServices{
  // private myAppUrl = 'http://localhost:8080/';
  private myAppUrl = 'http://localhost:30515/';
  
  private myApiUrl = 'api/Usuario/'

  constructor(private http: HttpClient) { }

  getListUsuario(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveUsuario(tarjeta: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  updateUsuario(id: number, tarjeta: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }
}

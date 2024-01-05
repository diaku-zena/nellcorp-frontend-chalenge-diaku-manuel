import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getPayments(): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.HISTORY_PAYMENT);
  }
  getAccountInfo(): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.ACCOUNT_INFO);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MineralSite {
  id: number;
  name: string;
  county: string;
  mineral: string;
  coordinates: [number, number];
}

@Injectable({
  providedIn: 'root'
})
export class MineralService {
  private apiUrl = 'http://localhost:3000/minerals'; // json-server endpoint

  constructor(private http: HttpClient) {}

  getMinerals(): Observable<MineralSite[]> {
    return this.http.get<MineralSite[]>(this.apiUrl);
  }
}

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
  private apiUrl = 'http://localhost:3000/minerals'; 
  private countiesUrl = 'http://localhost:3000/counties'; 
  private mineralsListUrl = 'http://localhost:3000/mineralsList';

  constructor(private http: HttpClient) {}

  getMinerals(): Observable<MineralSite[]> {
    return this.http.get<MineralSite[]>(this.apiUrl);
  }

  addMineral(mineral: MineralSite): Observable<MineralSite> {
    return this.http.post<MineralSite>(this.apiUrl, mineral);
  }

  deleteMineral(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** ✅ Fetch list of counties */
  getCounties(): Observable<string[]> {
    return this.http.get<string[]>(this.countiesUrl);
  }

  /** ✅ Fetch list of mineral types */
  getMineralsList(): Observable<string[]> {
    return this.http.get<string[]>(this.mineralsListUrl);
  }
}


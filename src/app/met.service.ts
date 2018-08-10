import { Injectable } from '@angular/core';
import {MetDrugClass} from './metDrugClass';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {MetDrugComposition} from './metDrugComposition';

@Injectable({
  providedIn: 'root'
})
export class MetService {
  private metDrugClassUrl = 'https://iosmedications.firebaseio.com/MET/class.json'; 
  private drugCompositionUrl='https://iosmedications.firebaseio.com/MET/drugs';
  constructor(private http:HttpClient) { }

  getmetDrugClass (): Observable<MetDrugClass[]> {
    return this.http.get<MetDrugClass[]>(this.metDrugClassUrl);
  }

  getDrugComposition(id: number): Observable<MetDrugComposition[]> {
    const url = `${this.drugCompositionUrl}/${id}.json`;
    return this.http.get<MetDrugComposition[]>(url);
  }
}

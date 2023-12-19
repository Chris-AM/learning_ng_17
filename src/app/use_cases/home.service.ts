import { Injectable, inject } from '@angular/core';
import { HousingLocation, ISubmitApplication, IApplicationResponse } from '../domain/interfaces/interfaces';
import { HousesDataSourceImpl } from '../infrastructure/datasource/houses.datasource.impl';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly datasource = inject(HousesDataSourceImpl);
  constructor() {}

  getHouses(): Observable<HousingLocation[]> {
    return this.datasource.getHouses();
  }

  getHouse(id: number): Observable<HousingLocation> {
    return this.datasource.getHouse(id);
  }

  submitApplication(application: ISubmitApplication): Observable<IApplicationResponse> {
    return this.datasource.submitApplication(application);
  }
}

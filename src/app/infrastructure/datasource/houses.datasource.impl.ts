import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousesDataSource } from '../../domain/datasource/houses.datasource';
import { HousingLocation } from '../../domain/interfaces/housing-location';
import { environment } from '../../config/app.environment';

@Injectable({
  providedIn: 'root',
})
export class HousesDataSourceImpl extends HousesDataSource {
  private readonly baseUrl: string = environment.base_url;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  override getHouses(): Observable<HousingLocation[]> {
    const petition = this.httpClient.get<HousingLocation[]>(`${this.baseUrl}locations`);
    return petition;
  }
}

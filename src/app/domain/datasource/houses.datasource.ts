import { HousingLocation } from '../interfaces/housing-location';
import { Observable } from 'rxjs';

export abstract class HousesDataSource {
  abstract getHouses(): Observable<HousingLocation[]>;
}

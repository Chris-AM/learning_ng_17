import { HousingLocation, IApplicationResponse, ISubmitApplication } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

export abstract class HousesDataSource {
  abstract getHouses(): Observable<HousingLocation[]>;
  abstract getHouse(id: number): Observable<HousingLocation>;
  abstract submitApplication(userData: ISubmitApplication): Observable<IApplicationResponse>;
}

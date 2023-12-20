import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HomeService } from '../../use_cases/home.service';
import { HousingLocation } from '../../domain/interfaces/housing-location';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HousingLocationComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public houses = signal<HousingLocation[]>([]);

  private housesService = inject(HomeService);

  ngOnInit(): void {
    this.getHouses();
  }
  
  public handleSearchResults(houses: HousingLocation[]): void {
    this.houses.set(houses);
  }

  public getHouses(): void {
    this.housesService.getHouses().subscribe({
      next: (houses) => {
        this.houses.set(houses);
      },
      error: (error) => {
        console.error('subscription error => ', error);
      },
    });
  }
}

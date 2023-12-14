import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HomeService } from '../../use_cases/home.service';
import { HousingLocation } from '../../domain/interfaces/housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public houses = signal<HousingLocation[]>([]);
  
  private housesService = inject(HomeService);

  ngOnInit(): void {
    this.getHouses();
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

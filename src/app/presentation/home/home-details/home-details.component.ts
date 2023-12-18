import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../../../domain/interfaces/housing-location';
import { HomeService } from '../../../use_cases/home.service';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css',
})
export class HomeDetailsComponent implements OnInit {
  public housingLocationId = signal<number>(0);
  public housingLocation!: HousingLocation;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly homeService: HomeService = inject(HomeService);

  constructor() {
    this.housingLocationId.set(this.route.snapshot.params['id']);
  }

  public ngOnInit(): void {
    this.getHomeDetails(this.housingLocationId());
  }

  public getHomeDetails(homeId: number): void {
    this.homeService.getHouse(homeId).subscribe({
      next: (housingLocation: HousingLocation) => {
        this.housingLocation = housingLocation;
      },
      error: (error: any) => {
        console.log('error => ', error);
      },
    });
  }
}

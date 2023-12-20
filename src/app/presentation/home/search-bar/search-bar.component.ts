import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { HousingLocation } from '../../../domain/interfaces/interfaces';
import { HomeService } from '../../../use_cases/home.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() public filteredLocationList: HousingLocation[] = [];
  @Output() public searchResults = new EventEmitter<HousingLocation[]>();

  public searchForm = new FormGroup({
    searchTerm: new FormControl('') as FormControl<string>,
  });

  private readonly homeService: HomeService = inject(HomeService);

  public filterLocations(filer: string | undefined): void {
    if (filer) {
      this.homeService.getHousesByCity(filer).subscribe({
        next: (houses) => {
          this.filteredLocationList = houses;
          this.searchResults.emit(houses);
        },
        error: (error) => {
          console.error('subscription error => ', error);
        },
      });
    } else {
      this.filteredLocationList = [];
    }
  }
}

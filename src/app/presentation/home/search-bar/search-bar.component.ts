import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HousingLocation } from '../../../domain/interfaces/housing-location';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() public filteredLocationList: HousingLocation[] = [];

  public filterLocations(filer: string): void {
    if (filer) {
      console.log('filer => ', filer);
      this.filteredLocationList = this.filteredLocationList.filter((location) =>
        location.name.toLowerCase().includes(filer.toLowerCase())
      );
    } else {
      this.filteredLocationList = [];
    }
  }
}

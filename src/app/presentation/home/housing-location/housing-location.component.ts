import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../../../domain/interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() public housingLocation!: HousingLocation;
}

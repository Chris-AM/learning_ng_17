import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {}

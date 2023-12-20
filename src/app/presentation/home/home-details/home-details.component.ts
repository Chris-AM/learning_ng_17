import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../../../domain/interfaces/housing-location';
import { HomeService } from '../../../use_cases/home.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IApplicationResponse } from '../../../domain/interfaces/application-response.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css',
})
export class HomeDetailsComponent implements OnInit {
  public housingLocationId = signal<number>(0);
  public housingLocation!: HousingLocation;
  public applyForm = new FormGroup({
    firstName: new FormControl('') as FormControl<string>,
    lastName: new FormControl('') as FormControl<string>,
    email: new FormControl('') as FormControl<string>,
  });

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

  public submitApplication(): void {
    const { firstName, lastName, email } = this.applyForm.value;

    if (firstName && lastName && email) {
      this.homeService.submitApplication({ firstName, lastName, email }).subscribe({
        next: (response: IApplicationResponse) => {
          Swal.fire({
            title: `${response.status}`,
            text: `${firstName}, ${response.message}`,
            icon: 'success',
          });
        },
        error: (error: any) => {
          Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error',
          });
        },
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please fill all the fields',
        icon: 'error',
      });
    }
  }
}

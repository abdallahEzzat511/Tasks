import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../shared/country.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  searchTerm: string = '';
  country: any = null;
  errorMessage: string = '';

  constructor(private countryService: CountryService) {}

  search() {
    if (!this.searchTerm.trim()) return;

    this.countryService.searchCountry(this.searchTerm).subscribe({
      next: (data: any[]) => {
        this.errorMessage = '';
        this.country = data[0]; // أول نتيجة
      },
      error: () => {
        this.country = null;
        this.errorMessage = '❌ الدولة غير موجودة';
      }
    });
  }
}

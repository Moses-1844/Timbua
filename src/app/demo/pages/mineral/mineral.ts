import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MineralService, MineralSite } from '../../../services/mineral.service'; // adjust path

@Component({
  selector: 'app-mineral',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mineral.html',
  styleUrls: ['./mineral.scss']
})
export class Mineral {
  minerals: MineralSite[] = [];
  filteredMinerals: MineralSite[] = [];

  // Filters
  searchText: string = '';
  selectedCounty: string = '';
  selectedMineral: string = '';

  // Dropdown data
  counties: string[] = [];
  mineralTypes: string[] = [];

  // Add form
  newMineral: Partial<MineralSite> = {
    name: '',
    county: '',
    mineral: '',
    coordinates: [0, 0]
  };

  constructor(private mineralService: MineralService) {}

  ngOnInit(): void {
    this.loadMinerals();
    this.loadCounties();
    this.loadMineralTypes();
  }

  /** Load minerals */
  loadMinerals(): void {
    this.mineralService.getMinerals().subscribe((data) => {
      this.minerals = data;
      this.applyFilters();
    });
  }

  /** Load counties from backend */
  loadCounties(): void {
    this.mineralService.getCounties().subscribe((data) => {
      this.counties = data;
    });
  }

  /** Load mineral types from backend */
  loadMineralTypes(): void {
    this.mineralService.getMineralsList().subscribe((data) => {
      this.mineralTypes = data;
    });
  }

  /** Apply filters */
  applyFilters(): void {
    this.filteredMinerals = this.minerals.filter((m) => {
      return (
        (this.searchText === '' || m.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
        (this.selectedCounty === '' || m.county === this.selectedCounty) &&
        (this.selectedMineral === '' || m.mineral === this.selectedMineral)
      );
    });
  }

  /** Add a new mineral */
  addMineral(): void {
    if (!this.newMineral.name || !this.newMineral.county || !this.newMineral.mineral) {
      alert('Please fill all fields.');
      return;
    }

    const payload: MineralSite = {
      id: Date.now(), // temporary ID
      name: this.newMineral.name!,
      county: this.newMineral.county!,
      mineral: this.newMineral.mineral!,
      coordinates: this.newMineral.coordinates as [number, number]
    };

    this.mineralService.addMineral(payload).subscribe(() => {
      this.loadMinerals();
      this.newMineral = { name: '', county: '', mineral: '', coordinates: [0, 0] };
    });
  }

  /** Delete a mineral */
  deleteMineral(id: number): void {
    this.mineralService.deleteMineral(id).subscribe(() => {
      this.loadMinerals();
    });
  }
}

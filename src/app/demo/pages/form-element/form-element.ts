import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { KENYA_MINERALS, MineralSite } from './mineral-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-element',
  standalone: true,   // ✅ mark as standalone
  imports: [CommonModule, FormsModule],  // ✅ bring in ngModel support
  templateUrl: './form-element.html',
  styleUrls: ['./form-element.scss']
})
export class FormElement implements AfterViewInit {
  private map!: L.Map;
  private markers: L.Marker[] = [];

  minerals = Array.from(new Set(KENYA_MINERALS.map(site => site.mineral))); // unique minerals
  counties = Array.from(new Set(KENYA_MINERALS.map(site => site.county)));  // unique counties

  selectedMineral: string = '';
  selectedCounty: string = '';

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([-0.0236, 37.9062], 6); // Kenya center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.renderMarkers(KENYA_MINERALS);
  }

  private renderMarkers(sites: MineralSite[]): void {
    // Clear existing markers
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];

    const mineralIcons: { [key: string]: L.Icon } = {
      Coal: L.icon({ iconUrl: 'assets/icon/coal.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Limestone: L.icon({ iconUrl: 'assets/icon/limestone.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      'Iron Ore': L.icon({ iconUrl: 'assets/icon/iron.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Gemstones: L.icon({ iconUrl: 'assets/icon/gem.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Gold: L.icon({ iconUrl: 'assets/icon/gold.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Salt: L.icon({ iconUrl: 'assets/icon/salt.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Gypsum: L.icon({ iconUrl: 'assets/icon/gypsum.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Granite: L.icon({ iconUrl: 'assets/icon/granite.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      'Building Stone': L.icon({ iconUrl: 'assets/icon/buildingstone.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Clay: L.icon({ iconUrl: 'assets/icon/clay.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Sand: L.icon({ iconUrl: 'assets/icon/sand.png', iconSize: [32, 32], iconAnchor: [16, 32] }),
      Default: L.icon({ iconUrl: 'assets/icon/default.png', iconSize: [32, 32], iconAnchor: [16, 32] })
    };

    sites.forEach(site => {
      const marker = L.marker(site.coordinates, {
        icon: mineralIcons[site.mineral] || mineralIcons['Default']
      })
        .addTo(this.map)
        .bindPopup(`<b>${site.name}</b><br/>
          County: ${site.county}<br/>
          Mineral: ${site.mineral}<br/>
          ${site.description}`);

      this.markers.push(marker);
    });
  }

  applyFilters(): void {
    let filteredSites = KENYA_MINERALS;

    if (this.selectedMineral) {
      filteredSites = filteredSites.filter(site => site.mineral === this.selectedMineral);
    }
    if (this.selectedCounty) {
      filteredSites = filteredSites.filter(site => site.county === this.selectedCounty);
    }

    this.renderMarkers(filteredSites);

    if (filteredSites.length > 0) {
      const group = L.featureGroup(this.markers);
      this.map.fitBounds(group.getBounds().pad(0.2));
    }
  }
}

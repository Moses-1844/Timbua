import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MineralService, MineralSite } from '../../services/mineral.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Extend Leaflet typings for Routing
declare module 'leaflet' {
  namespace Routing {
    function control(options: any): any;
  }
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  map!: L.Map;
  buildingMarker!: L.Marker;
  mineralTypes: string[] = [];
  selectedMineral: string = '';
  nearestMineral: any = null;
  routingControl: any;
  minerals: MineralSite[] = [];
  private mapInitialized = false;

  constructor(private mineralService: MineralService) {}

  ngAfterViewInit(): void {
    // prevent multiple init on hot reload
    if (!this.mapInitialized) {
      this.mapInitialized = true;
      setTimeout(() => {
        this.initMap();
        this.loadMinerals(); // Load minerals from JSON server
      });
    }
  }

  /** Initialize map */
  private initMap(): void {
    const mapContainer = document.getElementById('map');

    // ✅ Fix "map already initialized"
    if (mapContainer && mapContainer.hasAttribute('data-leaflet-id')) {
      mapContainer.removeAttribute('data-leaflet-id');
    }

    this.map = L.map('map').setView([0.0236, 37.9062], 6); // Centered on Kenya

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Allow engineer to place building site marker
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      if (this.buildingMarker) {
        this.map.removeLayer(this.buildingMarker);
      }

      this.buildingMarker = L.marker(e.latlng, { draggable: true }).addTo(this.map);

      this.buildingMarker.on('dragend', () => {
        this.findNearestMineral(this.buildingMarker.getLatLng(), this.selectedMineral);
      });

      if (this.selectedMineral) {
        this.findNearestMineral(e.latlng, this.selectedMineral);
      }
    });
  }

  /** Fetch minerals from JSON server */
  private loadMinerals(): void {
    this.mineralService.getMinerals().subscribe((data) => {
      this.minerals = data;
      this.mineralTypes = Array.from(new Set(data.map((m) => m.mineral)));
      this.addMineralMarkers();
    });
  }

  /** Add all mineral site markers */
  private addMineralMarkers(): void {
    this.minerals.forEach((site) => {
      const iconPath = `assets/icon/${site.mineral.toLowerCase()}.png`;

      // check if icon exists, fallback to default.png
      const img = new Image();
      img.src = iconPath;

      img.onload = () => {
        this.createMarker(site, iconPath);
      };

      img.onerror = () => {
        this.createMarker(site, 'assets/icon/default.png');
      };
    });
  }

  /** Create and add a marker */
  private createMarker(site: MineralSite, iconUrl: string): void {
    const icon = L.icon({
      iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const marker = L.marker(site.coordinates as [number, number], { icon }).addTo(this.map);

    marker.bindPopup(
      `<b>${site.name}</b><br>County: ${site.county}<br>Mineral: ${site.mineral}`
    );
  }

  /** Find nearest mineral site */
  findNearestMineral(latlng: L.LatLng, mineralType: string): void {
    if (!mineralType || this.minerals.length === 0) return;

    let nearest: MineralSite | null = null;
    let minDistance = Infinity;

    this.minerals
      .filter((m) => m.mineral === mineralType)
      .forEach((site) => {
        const distance =
          latlng.distanceTo(L.latLng(site.coordinates[0], site.coordinates[1])) / 1000; // km
        if (distance < minDistance) {
          minDistance = distance;
          nearest = site;
        }
      });

    if (nearest) {
      this.nearestMineral = { ...nearest, distance: minDistance };
      this.showRoute(latlng, nearest.coordinates);
    }
  }

  /** Show route between building site and mineral site */
  private showRoute(start: L.LatLng, end: [number, number]): void {
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    this.routingControl = L.Routing.control({
      waypoints: [L.latLng(start.lat, start.lng), L.latLng(end[0], end[1])],
      routeWhileDragging: true,
    }).addTo(this.map);
  }
}

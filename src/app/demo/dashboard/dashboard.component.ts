import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { KENYA_MINERALS, MineralSite } from './mineral-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Extend leaflet typings
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
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  map!: L.Map;
  buildingMarker!: L.Marker;
  mineralTypes: string[] = [];
  selectedMineral: string = '';
  nearestMineral: any = null;
  routingControl: any;

  ngAfterViewInit(): void {
    this.initMap();
    this.loadMineralTypes();
    this.addMineralMarkers();
  }

  /** Initialize map */
  private initMap(): void {
    this.map = L.map('map').setView([0.0236, 37.9062], 6); // Kenya center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Allow engineer to place building site marker
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      if (this.buildingMarker) {
        this.map.removeLayer(this.buildingMarker);
      }
      this.buildingMarker = L.marker(e.latlng, { draggable: true }).addTo(this.map);

      // On marker drag or place, update nearest mineral
      this.buildingMarker.on('dragend', () => {
        this.findNearestMineral(this.buildingMarker.getLatLng(), this.selectedMineral);
      });

      if (this.selectedMineral) {
        this.findNearestMineral(e.latlng, this.selectedMineral);
      }
    });
  }

  /** Extract unique mineral types */
  private loadMineralTypes(): void {
    this.mineralTypes = Array.from(new Set(KENYA_MINERALS.map(m => m.mineral)));
  }

  /** Add all mineral site markers with custom icons */
private addMineralMarkers(): void {
  KENYA_MINERALS.forEach(site => {
    const mineralFile = site.mineral.toLowerCase() + '.png';
    const iconPath = `assets/icon/${mineralFile}`;

    // Always create an Image to check existence
    const img = new Image();
    img.src = iconPath;

    img.onload = () => {
      // If image exists, use it
      this.createMineralMarker(site, iconPath);
    };

    img.onerror = () => {
      // If missing, fallback to default
      this.createMineralMarker(site, 'assets/icon/default.png');
    };
  });
}

/** Create and add a marker */
private createMineralMarker(site: MineralSite, iconUrl: string): void {
  const icon = L.icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const marker = L.marker(site.coordinates as [number, number], { icon }).addTo(this.map);

  marker.bindPopup(
    `<b>${site.name}</b><br>County: ${site.county}<br>Mineral: ${site.mineral}`
  );
}



  /** Find nearest mineral site */
  findNearestMineral(latlng: L.LatLng, mineralType: string): void {
    if (!mineralType) return;

    let nearest: MineralSite | null = null;
    let minDistance = Infinity;

    KENYA_MINERALS.filter(m => m.mineral === mineralType).forEach(site => {
      const distance =
        latlng.distanceTo(L.latLng(site.coordinates[0], site.coordinates[1])) / 1000; // km
      if (distance < minDistance) {
        minDistance = distance;
        nearest = site;
      }
    });

    if (nearest) {
      this.nearestMineral = {
        ...nearest,
        distance: minDistance
      };
      this.showRoute(latlng, nearest.coordinates);
    }
  }

  /** Show route between building site and mineral site */
  private showRoute(start: L.LatLng, end: [number, number]): void {
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start.lat, start.lng),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true
    }).addTo(this.map);
  }
}

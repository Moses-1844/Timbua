import { Component, OnInit } from '@angular/core';
import mineralsData from '../../../fake-data/minerals-data.json';

interface MineralSite {
  county: string;
  name: string;
  coordinates: number[];
  mineral: string;
  description: string;
}

interface MineralSummary {
  mineral: string;
  count: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  minerals: MineralSite[] = [];
  mineralSummary: MineralSummary[] = [];

  ngOnInit(): void {
    this.minerals = mineralsData as MineralSite[];
    this.generateSummary();
  }

  private generateSummary(): void {
    const counts: { [key: string]: number } = {};
    this.minerals.forEach(site => {
      counts[site.mineral] = (counts[site.mineral] || 0) + 1;
    });

    this.mineralSummary = Object.entries(counts).map(([mineral, count]) => ({
      mineral,
      count
    }));
  }
}

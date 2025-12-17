import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-metrics-row',
  imports: [MateriallistModule],
  templateUrl: './metrics-row.html',
  styleUrl: './metrics-row.scss',
})
export class MetricsRow {
  metrics = [
    {
      value: '50+',
      label: 'Developer Tools',
    },
    {
      value: '10K+',
      label: 'Monthly Uses',
    },
    {
      value: '99.9%',
      label: 'Client-Side Processing',
    },
    {
      value: '0',
      label: 'Data Stored',
    },
  ];
}

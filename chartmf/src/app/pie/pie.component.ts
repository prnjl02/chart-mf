import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
PieChart
  constructor() { }

  ngOnInit() {

  }

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    },
  };

  pieChartLabels: Label[] = ['Owe', 'Own'];

  pieChartData: number[] = [65, 35];

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins = [];

  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];


}

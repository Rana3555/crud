import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  // constructor() { }
    title = 'dynamic-plots';
    // Bar Chart
    graph1 = {
      data: [
        { x: [1, 2, 3,5], y: [2, 3, 4], type: 'bar' },
      ],
      layout: {
        title: 'Bar Plot',
        width: 700,
        height: 500
      }
    };
    // Line chart
    graph2 = {
      data: [
        { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
        { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
        { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
      ],
      layout: {
        title: 'Scatter Plot',
        width: 700,
        height: 500
      }
    };
    graph3 = {
      data: [
        {
          values: [16, 15, 12, 6, 5, 4, 42],
          labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
          domain: { column: 0 },
          name: 'GHG Emissions',
          hoverinfo: 'label+percent+name',
          hole: .4,
          type: 'pie'
        }, {
          values: [27, 11, 25, 8, 1, 3, 25],
          labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
          text: 'CO2',
          textposition: 'inside',
          domain: { column: 1 },
          name: 'CO2 Emissions',
          hoverinfo: 'label+percent+name',
          hole: .4,
          type: 'pie'
        }
      ],
      layout: {
        title: 'Global Emissions 1990-2011 Pie(Donut Chart)',
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'GHG',
            x: 0.17,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'CO2',
            x: 0.82,
            y: 0.5
          }
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: { rows: 1, columns: 2 }
      }
    }
    graph4 = {
      data: [
        {
          type: "sunburst",
          labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
          parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"],
          values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
          outsidetextfont: { size: 20, color: "#377eb8" },
          leaf: { opacity: 0.4 },
          marker: { line: { width: 2 } },
        }
      ],
      layout: {
        title: 'Bar Plot',
        width: 500,
        height: 500
      }
    };
    graph5 = {
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      }],
      layout: [{
        title: 'Marker Size',
        showlegend: true,
        width: 500,
        height: 500
      }]
    }
    private zoom = {
      x:['2020-10-04', '2021-11-04', '2023-12-04'],
      y: [90, 40, 60],
      type: 'scatter'
    };

    data = [this.zoom];
     layout = {
    title: 'Scroll and Zoom',
    showlegend: false
    };
    config={
    scrollZoom: true
  }
  trace = {
    x:['Zebras', 'Lions', 'Pelicans'],
    y: [90, 40, 60],
    type: 'bar',
    name: 'New York Zoo'
  }
  trace2 = {
    x:['Zebras', 'Lions', 'Pelicans'],
    y: [10, 80, 45],
    type: 'bar',
    name: 'San Francisco Zoo'
  }
    chart={
   data : [this.trace,this.trace2],
   layout : {
    title: 'Hide the Modebar',
    showlegend: true
  },
  config:{
    displayModeBar:false
  }
  }
  }

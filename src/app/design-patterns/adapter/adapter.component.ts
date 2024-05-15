import { Component } from '@angular/core';
import {ChartingAdapterService} from "./charting-adapter.service";

@Component({
  selector: 'app-adapter',
  standalone: true,
  imports: [],
  template: ``
})
export class AdapterComponent {
  adapterObj : any[];
  constructor(private chartingAdapterService: ChartingAdapterService) {
    this.adapterObj = this.chartingAdapterService.getData();
  }
  ngOnInit() {
    console.log(this.adapterObj);
  }
}

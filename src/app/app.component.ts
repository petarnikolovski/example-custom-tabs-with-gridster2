import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
   * Each time tab is switched, call Gridster api to resize itself. This is
   * necessary in order for grids to render correctly (or to render at all).
   */
  public onChange(event, ...tabComponents): void {
    for (let tab of tabComponents) {
      tab.options.api.resize();
    }
  }

}

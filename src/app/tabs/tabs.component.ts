import { Component, Output, EventEmitter } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Output() selectedTabChange: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  private tabs: TabComponent[] = [];

  public addTab(tab: TabComponent): void {
    if (this.tabs.length === 0) {
      tab.active = true;
    }

    this.tabs.push(tab);
  }

  public selectTab(currentTab: TabComponent): void {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    currentTab.active = true;
    this.selectedTabChange.emit(currentTab);
  }

}

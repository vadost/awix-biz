import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';

@Component({
    selector: 'app-sidebar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {
  public menuItems: RouteInfo[];

  ngOnInit() {
    console.log('ROUTES', ROUTES)
    this.menuItems = ROUTES;
  }

}

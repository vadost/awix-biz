import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      body.classList.add('perfect-scrollbar-on');
    } else {
      body.classList.add('perfect-scrollbar-off');
    }
    $.material.init();
  }
}

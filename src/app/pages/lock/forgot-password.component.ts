import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  moduleId: module.id,
  selector: 'lock-cmp',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  test: Date = new Date();

  checkFullPageBackgroundImage() {
    const $page = $('.full-page');
    const image_src = $page.data('image');

    if (image_src !== undefined) {
      const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
      $page.append(image_container);
    }
  };

  ngOnInit() {
    this.checkFullPageBackgroundImage();

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 100);
  }
}

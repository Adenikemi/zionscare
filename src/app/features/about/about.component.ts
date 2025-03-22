import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then((AOS) => {
        AOS.init();
        AOS.refresh();
      });
    }
  }
}

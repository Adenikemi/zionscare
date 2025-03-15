import { Component, Inject, inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  private router = inject(Router);

  ngOnInit(): void {
    AOS.init();
    AOS.refresh();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const myCarousel = new (window as any).bootstrap.Carousel(document.getElementById('myCarousel')!, {
        interval: 700,
        ride: 'carousel',
        wrap: true
      });

      myCarousel.cycle();
    }
  }

  goToContact() {
    this.router.navigate(["/contact"])
  }
}

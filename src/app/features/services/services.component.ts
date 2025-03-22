import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID  } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

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
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then((AOS) => {
        AOS.init();
        AOS.refresh();
      });
    }
  }

  goToContact() {
    this.router.navigate(["/contact"])
  }
}

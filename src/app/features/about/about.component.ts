import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  ngOnInit(): void {
      AOS.init();
      AOS.refresh();
    }
}

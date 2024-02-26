import { Component, HostListener } from '@angular/core';
import { CommonModule } from "@angular/common";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FaIconComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faBars = faBars;

  isNavbarHidden: boolean = true;
  scrolledDown: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(window.pageYOffset > 0) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }

  links: { text: string, url: string }[] = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Services', url: '/services' }
  ];

  toggleNavbar() {
    this.isNavbarHidden = !this.isNavbarHidden;
  }
}

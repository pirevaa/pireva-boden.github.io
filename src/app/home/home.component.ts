import { Component } from '@angular/core';
import {faHouse, faRuler} from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faHouse = faHouse;
  faRuler = faRuler;
}

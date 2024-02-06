import { Component } from '@angular/core';
import {UserInfoComponent} from "./user-card-info/user-info.component";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    UserInfoComponent

  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

}

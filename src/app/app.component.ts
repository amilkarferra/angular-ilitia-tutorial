import {Component} from '@angular/core';
import {ContactFormImprovableComponent} from "./contact-form-improvable/contact-form-improvable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactFormImprovableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IlitiaTuto01 - Angular Material';
}

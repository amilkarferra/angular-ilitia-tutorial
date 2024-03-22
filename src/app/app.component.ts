import {Component} from '@angular/core';
import {
  EmulatedEncapsulation
} from "./01-encapsulation/emulated-encapsulation.ts/emulated-encapsulation";
import {NoneEncapsulationComponent} from "./01-encapsulation/none-encapsulation/none-encapsulation.component";
// TODO 01 : mostrar y descomentar componente con ViewEncapsulation.Emulated ver como convive sin problema con el titulo h1 del app.component mostrar DOM
// TODO 02 : Comentar componente con ViewEncapsulation.Emulated y descomentar componente con ViewEncapsulation.None ver como se comporta el DOM
// TODO 03 : Descomentar todos los estilos





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmulatedEncapsulation, NoneEncapsulationComponent],
  styles: [`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `],
  template: `
    <div>
      <h1>Encapsulation (Titulo del proyecto)</h1>
      <app-emulated-encapsulation/>
      <app-none-encapsulation/>
    </div>
  `,
})
export class AppComponent {
  title = 'IlitiaTuto01';
}

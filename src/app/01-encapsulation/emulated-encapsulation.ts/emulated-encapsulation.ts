import {Component, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-emulated-encapsulation',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    h1 {
      color: rgba(255, 0, 0, 0.85);
    }
  `,
    `
      div{
        width: 100vw;
        margin: 3rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }`,`
      .subtitle {
        color: lightslategray;
        padding: 0.5rem;
      }
    `],
  template: `
    <div class="container">
      <h1>Emulated Encapsulation</h1>
      <span class="subtitle">This is a subtitle </span>
    </div>
  `
})
export class EmulatedEncapsulation {

}

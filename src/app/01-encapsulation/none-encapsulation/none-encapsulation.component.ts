import {Component, ViewEncapsulation} from '@angular/core';


//TODO 04: Change the encapsulation to Emulated to see the difference


@Component({
  selector: 'app-none-encapsulation',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="container">
      <h1>None Encapsulation</h1>
      <span class="subtitle">This is another subtitle</span>
    </div>
  `,


  styles: [`
    h1 {
      color: #b71a0b;
    }
  `,
    `
      div.container{
        background-color: bisque;
        width: 100vw;
        margin: 3rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }`,`
      div span.subtitle {
        background-color: #25b020 !important;
        color: white;
        padding: 0.5rem;
      }
    `],
})
export class NoneEncapsulationComponent {

}



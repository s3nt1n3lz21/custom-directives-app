import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-directives-app';
  // Attribute Directives
  //  - Change styles of DOM elements
  // e.g. NgStyle, NgClass

  // Structural Directives 
  // - Change structure of DOM, adding or removing elements
  // - Has a * prefix
  // e.g. NgIf, NgFor, NgSwitch
}

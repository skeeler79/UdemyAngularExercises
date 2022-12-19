import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  //styles can be written within here and overwrite the css file
  styles: [`
  h3 {
    color: dodgerblue;
  }`
    
  ]
})
export class AppComponent {
  
}

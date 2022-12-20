import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addParagraph = false;
  clickArray = [];
  

  showParagraph(){
    this.addParagraph = !this.addParagraph;
    this.clickArray.push(this.clickArray.length +1)
  }

  changeColor (){
    if (this.clickArray.length >= 5){
      return 'blue'
    }else{
      return 'white';
    }
  
  }
  
}

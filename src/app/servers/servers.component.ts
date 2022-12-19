import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // by changing from templateURL to just template, you can use another component's html as a template. You can also use backticks and insert html (best if it is less than 3 lines)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  
  constructor() { 
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
    
}
  ngOnInit(): void {
  }

  onCreateServer (){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName (words){
    this.serverName= (<HTMLInputElement>words.target).value;
  }
  
}

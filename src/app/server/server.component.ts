import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }`]
})


export class ServerComponent {
 serverID: number = 10;
 serverStatus: string = 'offline';

 constructor (){
     this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
     //math.random produces a number between 0 and 1. if the number is greater than .5, change from online to offline.
}
 getServerStatus(){
     return this.serverStatus;
 }

 getColor(){
     return this.serverStatus === 'online' ? 'green' : 'red';
     //ternary expression if serverStatus is online, return green, otherwise return red. Can also use an if then statement.
 }
}
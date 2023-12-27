import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  serverName = '';
  allowNewServer = false;
  serverCreateStatus = 'No Server was created !';
  isServerCreated = false;
  username = '';
  servers = ["Test1", "Test2"];
  showDetails = true;
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.isServerCreated = true;

    this.servers.push(this.serverName);

    this.allowNewServer = false;
    setTimeout(() => {
      this.allowNewServer = true;
      this.isServerCreated = false;
    }, 2000);
  }

  onUpdateServerName(event: any) {
    console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onClearUserName() {
    this.username = '';
  }

  toggleDisplay(){
    this.showDetails = !this.showDetails;
    this.logs.push(this.showDetails + " " + new Date().getTime());
  }
}

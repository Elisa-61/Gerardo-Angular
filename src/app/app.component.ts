import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() appEvent= new EventEmitter();
  title = 'This is my first Angular project';
  devices : Device []= [
    {
      id:1,
      name: "Device01",
      brand: "Thinkpad",
      model: "ITZ123",
      year: 2000,
      serial: "TR67Y21"
    },
    {
      id:2,
      name: "Device02",
      brand: "Inspiron",
      model: "DTR675",
      year: 1999,
      serial: "Tr56Y"
    }
    

  ]
  showUpdate:boolean=false;

  newSelectedDevice?:Device;

   addDevice(device: Device){
    this.devices.push(device as Device);
   console.log(this.devices);

   }
   updateDevice(id:any){
    this.showUpdate=true;
    this.newSelectedDevice = this.devices.find(device => device.id == id);
    console.log(this.newSelectedDevice);
    console.log(id);
   }
   
   updateDisplay(updated:Device){
    this.showUpdate=false;
    let n = this.devices.findIndex(device => device.id == updated.id)
    console.log(n);
    this.devices[n] = updated;

   }

}
// {
    //   name: "Device03",
    //   brand: "Spectre",
    //   model: "T34RD",
    //   year: 2001,
    //   serial: "4GTY65"
    // }
  
  // title = 'angular-g1-project';
  // appMessage = "This is for input parameter";

  // appMessageArray = ['hi', 'hello', 'goodbye', 'go', 'stop', 'please'];

  // showComponent = true;

  // appEvent(event){
  //   alert(event);
  // }

  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }

 
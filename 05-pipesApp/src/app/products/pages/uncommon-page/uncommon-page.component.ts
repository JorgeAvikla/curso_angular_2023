import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //in i18n
  public name:string = 'Jorge';
  public gender: 'male'| 'female' = 'male';
  public invitationMap =  {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient():void {
    this.name = 'Gisela';
    this.gender = 'female';
  }

  atenderCliente():void {
    this.clients.shift();
  }
// i8plural pipe
  public clients: string[]= ['jorge', 'luis', 'gerardo', 'nahum', 'jamin', 'eder', 'lucia', 'cesar', 'gabi']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando ',
    '=1': 'tenemos un cliente esperando',
     'other':'tenemos # clientes esperando'
  }

  // keyvalue pipe
  public person = {
    name:'Jorge',
    age: 29,
    address:'Tlaxcala'
  }


  // Async Pipe

  public myObservableTimer = interval(2000).pipe(
  tap(value => console.log('tap:', value) )
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() => {
    resolve('tenemos data de la prmesa');
    }, 3500)
  })


}

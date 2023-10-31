import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public orderBy: keyof Hero | '' = '';

  public herores: Hero[]= [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Mujer Maravilla',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Wolverine',
      canFly: false,
      color: Color.yellow,
    },
    {
      name: 'Thor',
      canFly: true,
      color: Color.gray,
    },
    {
      name: 'IronMan',
      canFly: false,
      color: Color.red,
    },
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }

}

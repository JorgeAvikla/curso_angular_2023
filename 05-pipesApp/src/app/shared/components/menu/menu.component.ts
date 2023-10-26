import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  // public menuItems: MenuItem[] = [];

  //   ngOnInit() {
  //       this.menuItems = [
  //           {
  //               label: 'Pipes de Angular',
  //               icon: 'pi pi-desktop',
  //               items:[
  //                 {
  //                   label:'Texto y fechas',
  //                   icon: 'pi pi-align-left',
  //                 },
  //                 {
  //                   label:'Numeros',
  //                   icon: 'pi pi-dollar',
  //                 },
  //                 {
  //                   label:'No comunes',
  //                   icon: 'pi pi-globe',
  //                 },
  //               ]
  //           },
  //           {
  //               label: 'Pipes Personalizados',
  //               icon: 'pi pi-cog',
  //               items:[
  //                 {
  //                   label:'Otro elemento',
  //                   icon: 'pi pi-cog',
  //                 }
  //               ]
  //           }
  //       ];
  //   }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto y fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
          },
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
          }
        ]
      },
    ];
  }
}

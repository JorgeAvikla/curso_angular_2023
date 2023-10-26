import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string ="jorge";
  public nameUper: string ="JORGE";
  public fullName: string ="JorGe AvILA";

  public customDate: Date = new Date();

}

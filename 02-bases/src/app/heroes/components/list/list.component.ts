import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   public HeroNames: string[] =['SpiderMans','IronMan','Hukl','Thor'];
   public deletedHero?:string;

   removeLastHero():void{
    this.deletedHero = this.HeroNames.pop();
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosNames: string[]=['Batman', 'Flash', 'Superman', 'J\'onn J\'onzz', 'Raven'];
  public deleteHero?: string;

  removeLastHero():void{
     this.deleteHero= this.herosNames.pop();
    // console.log({deleteHero});
  }
}

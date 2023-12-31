import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNAmes: string[] = ['Spiderman', 'IronMan', 'She Hulk', 'Thor']
  public deletedHero?: string;
  removeLastHero():void {
    this.deletedHero = this.heroNAmes.pop()
  }
}

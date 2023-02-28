import { Component, OnInit } from '@angular/core';
import { SubService } from '../services';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  private res : number = 0

  constructor(private subService: SubService) { }

  ngOnInit(): void {
  }

  sub(numero1: string, numero2: string): void {
    let n1; Number;
    let n2; Number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.subService.sub(n1, n2);

  }

  get resultado(): string {
    return this.res.toString();
  }

}

import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-star-rate",
  templateUrl: "./star-rate.component.html",
  styleUrls: ["./star-rate.component.scss"]
})
export class StarRateComponent implements OnInit {
  constructor() {}
  rate: number = 0;
  starNumber: Array<number> = new Array<number>();
  _highestRate: number;
  @Input()
  set highestRate(value: string) {
    console.log(value);
    this._highestRate = +value;
    for (let i = 1; i <= this._highestRate; i++) {
      this.starNumber.push(i);
    }
  }

  @Input()
  readOnly?: boolean;

  @Output()
  hasRated: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  updateRate(rate) {
    this.rate == rate ? this.rate-- : (this.rate = rate);
    console.log("Rate : " + this.rate);
    this.hasRated.emit(String(this.rate));
  }
}

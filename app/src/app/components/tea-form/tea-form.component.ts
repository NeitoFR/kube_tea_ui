import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ITea } from "src/app/interfaces/tea.model";

@Component({
  selector: "app-tea-form",
  templateUrl: "./tea-form.component.html",
  styleUrls: ["./tea-form.component.scss"]
})
export class TeaFormComponent implements OnInit {
  constructor() {}

  nameInput: string;
  flavorInput: string;
  rateInput: number;

  @Output()
  addTeaEvent: EventEmitter<ITea> = new EventEmitter<ITea>();

  addTea(newTea: any) {
    console.log("Add Tea Clicked sending to parent..", newTea);
    this.addTeaEvent.emit({
      teaName: newTea.nameInput,
      teaFlavor: newTea.flavorInput,
      teaRate: newTea.rateInput
    });
  }

  updateRate(updatedRate) {
    console.log("Got new rate", updatedRate);
    this.rateInput = updatedRate;
  }

  ngOnInit() {
    this.rateInput = 0;
  }
}

import { Component, OnInit, Input, Output } from "@angular/core";
import { ITea } from "../../interfaces/tea.model";
import { TeaService } from "../../services/tea.service";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "tea-details",
  templateUrl: "./tea-details.component.html",
  styleUrls: ["./tea-details.component.scss"]
})
export class TeaDetailsComponent implements OnInit {
  constructor(public teaService: TeaService) {}

  @Input()
  tea: ITea;

  @Output()
  emitter: EventEmitter<any> = new EventEmitter<any>();

  onDelete(teaName) {
    this.teaService
      .deleteTea("teaName", teaName)
      .then(res => {
        //How do I update list from here ?
        this.emitter.emit("update-list");
      })
      .catch(error => {});
  }
  ngOnInit() {}
}

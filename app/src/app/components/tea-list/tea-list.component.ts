import { Component, OnInit, Input } from "@angular/core";
import { ITea } from "src/app/interfaces/tea.model";

@Component({
  selector: "app-tea-list",
  templateUrl: "./tea-list.component.html",
  styleUrls: ["./tea-list.component.css"]
})
export class TeaListComponent implements OnInit {
  constructor() {}
  @Input()
  teaList: ITea[];
  ngOnInit() {}
}

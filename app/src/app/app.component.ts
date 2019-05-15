import { Component } from "@angular/core";
import { TeaService } from "./services/tea.service";
import { ToastrService } from "./services/toastr.service";
import { ITea } from "./interfaces/tea.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  ngOnInit(): void {
    // this.teaService.fillTeaList();
    this.updateTeaList();
  }

  teaList: ITea[];

  constructor(private teaService: TeaService, private toastr: ToastrService) {
    teaService.updateTeaList$.subscribe(() => {
      toastr.info("Updating tea list...");
      this.updateTeaList();
    });
  }
  handleAddTeaEvent(stuff: any) {
    this.toastr.success("Event emitted");
    this.teaService
      .addTea(stuff)
      .then(res => {
        this.updateTeaList();
      })
      .catch(err => {
        this.toastr.error("Error adding tea");
        console.log("Error addind tea", err);
      });
  }
  updateTeaList(): void {
    console.log("Updating tea list");

    this.teaService.getTeas().subscribe(teas => {
      this.teaList = teas;
    });
  }
}

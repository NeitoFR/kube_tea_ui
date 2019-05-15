import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ITea } from "../interfaces/tea.model";
import * as _ from "lodash";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "../services/toastr.service";
import { environment } from "../../environments/environment";

@Injectable()
export class TeaService {
  public updateTeaList$: EventEmitter<any>;
  public teaList: ITea[] = [];

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    this.updateTeaList$ = new EventEmitter();
    console.log(
      "The TeaService is using : " + environment.teaApiUrl + " as API URL"
    );
  }

  getTeas(): Observable<ITea[]> {
    let subject = new Subject<ITea[]>();
    this.httpClient.get(environment.teaApiUrl + "/teas").subscribe(
      res => {
        console.log("Got teas ", res);
        this.teaList = res["data"];
        subject.next(this.teaList);
        subject.complete();
      },
      error => {
        console.log("Erreur : ", error);
        this.toastr.error("Error getting tea list");
        return { error: error };
      }
    );
    if (subject) return subject;
  }
  getTea(name: string): ITea {
    return this.teaList.find(tea => tea.teaName === name);
  }

  addTea(newTea: ITea): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("got new tea to add", newTea);
      this.httpClient
        .post(environment.teaApiUrl + "/teas", { order: "add", tea: newTea })
        .subscribe(
          res => {
            this.toastr.success("New Tea Added to MongoDB");
            this.updateTeaList$.emit();
            resolve();
          },
          error => {
            reject(error);
          }
        );
    });
  }
  deleteTea(filter: string, name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("got tea to delete", name);
      this.httpClient
        .post(environment.teaApiUrl + "/teas", {
          order: "delete",
          key: filter,
          value: name
        })
        .subscribe(
          res => {
            this.toastr.success("Tea : " + name + " Deleted from MongoDB");
            this.updateTeaList$.emit();
            resolve();
          },
          error => {
            reject(error);
          }
        );
    });
  }

  fillTeaList(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("Asking to fill tea list");
      this.httpClient.get(environment.teaApiUrl + "/fill").subscribe(
        res => {
          this.toastr.success("Tea List filled");
          this.updateTeaList$.emit();
          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}

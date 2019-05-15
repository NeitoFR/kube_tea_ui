import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MainToolbarComponent } from "./components/main-toolbar/main-toolbar.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { TeaFormComponent } from "./components/tea-form/tea-form.component";
import { TeaListComponent } from "./components/tea-list/tea-list.component";
import { TeaDetailsComponent } from "./components/tea-details/tea-details.component";
import { StarRateComponent } from "./components/star-rate/star-rate.component";
import { TeaService } from "./services/tea.service";
import { ToastrService } from "./services/toastr.service";
@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    TeaFormComponent,
    TeaListComponent,
    TeaDetailsComponent,
    StarRateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [TeaService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {}

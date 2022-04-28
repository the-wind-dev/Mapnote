import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TagsFilterComponent } from "./tags-filter.component";

@NgModule({
    declarations: [
      TagsFilterComponent
    ],
    exports: [
      TagsFilterComponent
    ],
    imports: [
      CommonModule
    ]
  })
  export class TagsFilterModule {
  }
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MdEditorComponent } from "./md-editor.component"

@NgModule({
  declarations: [
    MdEditorComponent
  ],
  exports: [
    MdEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MdEditorModule { }

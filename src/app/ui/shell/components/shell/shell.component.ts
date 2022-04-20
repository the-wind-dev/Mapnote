import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { Router } from "@angular/router"
import { MapService } from "src/app/map.service"
import { DialogService } from "src/app/dialog.service"
import { LeafletMouseEvent } from "leaflet"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public searchFormControl: FormControl = new FormControl()
  public isShowAddButton: boolean = false

  constructor(private mapService: MapService,
              private dialogService: DialogService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        this.isShowAddButton = true
        this.dialogService.isCurrentEditLatLng = event.latlng
      })

      // map.addEventListener("blur", () => {
      //   this.isShowAddButton = false
      // })
    })
    
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.isShowCreateOrEditDialog = true
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"

@Component({
  selector: "mn-tags-filter",
  templateUrl: "./tags-filter.component.html",
  styleUrls: [ "./tags-filter.component.scss" ],
  
})
export class TagsFilterComponent implements OnInit {
  
  @Input()
  public elements: string[] = []

  @Input()
  public selected: string[] = []

  @Output() selectedChanges = new EventEmitter()

  constructor() {
  }

  public onSelectedChanges() {
      this.selectedChanges.emit(this.selected)
  }

  public ngOnInit(): void { 
  }

  public onClickTagButton(event: Event): void {

    const target: HTMLElement = event.target as HTMLElement
    //берем название тега, на который кликнули
    const tag: string = target.innerText
    
    //если в selected находим кликнутый, то удаляем его из selected
    if (this.checkTagInSelected(tag)) { 
        this.deleteTagFromSelected(tag)
    }
    //если в selected нет кликнутого тега, то добавляем его в selected
    else {
        this.addTagToSelected(tag)
    }

    this.onSelectedChanges()
  } 

  private checkTagInSelected(tag: string): boolean {
      if (this.selected.includes(tag)) {
        return true 
      }
      else return false
  }

  private deleteTagFromSelected(tag: string): void {
    let indexToDelete = this.selected.indexOf(tag)
    this.selected.splice(indexToDelete, 1)
  }

  private addTagToSelected(tag: string): void {
    this.selected.push(tag)
  }
}
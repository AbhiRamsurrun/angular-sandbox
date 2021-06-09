import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {

  @HostBinding('style.background-color') public background = "#fff";
  @HostBinding('style.opacity') public opacity = "1";
  @Output() onFileDropped = new EventEmitter<any>();

  constructor() {

  }

  @HostListener('dragover', ["$event"]) onDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.background = "#9ecbec";
    this.opacity = "0.8";
  }

  @HostListener('dragleave', ["$event"]) onDragLeave(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.background = "#fff";
    this.opacity = "1";
  }

  @HostListener('drop', ["$event"]) onDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.background = "#f5fcff";
    this.opacity = "1";
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }
}

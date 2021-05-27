import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() whatsUp;
  @Input() carDetails: Car;
  modalRef: BsModalRef;

  constructor( 
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  
}

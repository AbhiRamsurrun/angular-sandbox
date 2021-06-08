import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loadig',
  templateUrl: './loadig.component.html',
  styleUrls: ['./loadig.component.scss']
})
export class LoadigComponent implements OnInit, AfterViewInit, OnDestroy {

  isLoading: boolean = false;
  loadingSubscription: Subscription;

  constructor(
    public loadingService: LoadingService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.loadingSubscription = this.loadingService.loading.subscribe((status: boolean) => {
      this.isLoading = status;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(){
    this.loadingService.loading.unsubscribe();
  }
}

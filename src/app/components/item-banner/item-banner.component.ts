import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.sass'],
})
export class ItemBannerComponent implements OnInit {
  @Input() items: Product[] = [];
  itemsCopy: Product[] = [];

  page: number = 1;
  count: number = 0;
  itemSize: number = 8;

  ngOnInit(): void {}

  onPageChange(event: any) {
    this.page = event;
  }
}

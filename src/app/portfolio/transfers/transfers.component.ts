import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Transfers } from 'src/app/common/model/transfers';

const ELEMENT_DATA: Transfers[] = [
  {id: 1, fromAccount: 'Savings Account', amount: 200, toAccount: 'Checking'},
  {id: 2, fromAccount: 'Checking', amount: 500, toAccount: 'Savings Account'},
  {id: 3, fromAccount: 'Net Cash', amount: 200, toAccount: 'Savings Account'}
];

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['fromAccount', 'toAccount', 'amount'];
  dataSource: MatTableDataSource<Transfers>;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

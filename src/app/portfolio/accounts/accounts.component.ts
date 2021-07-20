import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BankingAccounts } from 'src/app/common/model/banking-accounts';


const ELEMENT_DATA: BankingAccounts[] = [
  {id: 1, name: 'Savings Account', balance: 20000, type: 'Bank Account'},
  {id: 2, name: 'Checking', balance: 5500, type: 'Bank Account'},
  {id: 3, name: 'Net Cash', balance: 25000, type: 'Bank Account'},
  {id: 4, name: 'Vanguard Magellan Stock', balance: 500000, type: 'Stock/Bond Portfolio'},
  {id: 5, name: 'Fidelity Small Cap', balance: 235350, type: 'Stock/Bond Portfolio'},
  {id: 6, name: 'Fidelity Municipal Bond Fund', balance: 126234.34, type: 'Stock/Bond Portfolio'},
  {id: 7, name: 'Visa Credit Card', balance: 5254.12, type: 'Liabilities'},
  {id: 8, name: 'Car Loan', balance: 12250, type: 'Liabilities'}
];

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'balance', 'type'];
  dataSource: MatTableDataSource<BankingAccounts>;

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
